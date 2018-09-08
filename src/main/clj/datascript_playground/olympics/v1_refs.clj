(ns datascript-playground.olympics.v1-refs
  (:require [datascript-playground.olympics.core :refer [noc-regions athletes]]
            [datascript.db :as db]
            [datascript.core :as d]
            [clojure.set :refer [intersection]]
            [clojure.java.io :as io]
            [clojure.edn :as edn]))

;Note that sometimes the region is in the note.
;Another good example of trashy data
;(->> noc-regions
;     (filter :notes)
;     (map (juxt :region :notes)))

(defn noc [{:keys [noc region notes]}]
  (let [regions (cond-> [] region (conj region) notes (conj notes))]
    {:noc/name   noc
     :noc/region (map (fn [r] {:region/name r}) regions)}))

(defn athlete [{:keys [sport noc age sex name city year season event
                       team weight id games height medal]}]
  (cond-> {:athlete/id     {:person/id id}
           :athlete/name   {:person/name name}
           :athlete/sex    {:person/sex sex}
           :athlete/sport  {:sport/name sport}
           :athlete/event  {:event/name event}
           :athlete/noc    {:noc/name noc}
           :athlete/team   {:team/name team}
           :athlete/games  {:games/name games}
           :athlete/city   {:city/name city}
           :athlete/season {:season/name season}
           :athlete/year   {:year/value year}}
          height (assoc :athlete/height height)
          age (assoc :athlete/age age)
          weight (assoc :athlete/weight weight)
          medal (assoc :athlete/medal {:medal/name medal})))

(def schema (-> "datascript_playground/olympics/ref_schema.edn" io/resource slurp edn/read-string))

(defonce no-athlete-db
         (-> (db/empty-db schema)
             (d/db-with (map noc noc-regions))))

(defn create-olympic-db []
  (d/db-with no-athlete-db (map athlete athletes)))

;Does what we want, but no logically unique identity protection
(defonce olympic-db (time (create-olympic-db)))

;This will not be equal to the above db.
(defonce unguarded-olympic-db (time (d/db-with olympic-db (map athlete (take 1 athletes)))))

;TODO - time compared with native implementation
(defn find-barcelona-usa-gold-medalists [db]
  (time
    (count
      (d/q
        '[:find ?athlete-name ?event-name
          :in $ ?cn ?mn ?tn
          :where
          [?city :city/name ?cn]
          [?medal :medal/name ?mn]
          [?team :team/name ?tn]
          [?e :athlete/city ?city]
          [?e :athlete/medal ?medal]
          [?e :athlete/team ?team]
          [?e :athlete/name ?n]
          [?n :person/name ?athlete-name]
          [?e :athlete/event ?event]
          [?event :event/name ?event-name]]
        db
        "Barcelona" "Gold" "United States"))))

(defn find-usa-gold-medal-events [db]
  (time
    (count
      (d/q
        '[:find ?event-name
          :in $ ?cn ?mn ?tn
          :where
          [?city :city/name ?cn]
          [?medal :medal/name ?mn]
          [?team :team/name ?tn]
          [?e :athlete/city ?city]
          [?e :athlete/medal ?medal]
          [?e :athlete/team ?team]
          [?e :athlete/event ?event]
          [?event :event/name ?event-name]]
        db
        "Barcelona" "Gold" "United States"))))
;
;(time
;  (count
;    (d/q
;      '[:find ?athlete-name ?event-name
;        :in $ ?city ?medal ?team-name
;        :where
;        [?e :athlete/city ?city]
;        [?e :athlete/medal ?medal]
;        [?e :athlete/team ?team-name]
;        [?e :athlete/event ?event]
;        [?event :event/name ?event-name]
;        [?e :athlete/name ?n]
;        [?n :person/name ?athlete-name]]
;      olympic-db
;      [:city/name "Barcelona"]
;      [:medal/name "Gold"]
;      [:team/name "United States"])))
;
;
;(time
;  (count
;    (d/q
;      '[:find ?e
;        :in $ ?id ?games ?event
;        :where
;        [?e :athlete/id ?id]
;        [?e :athlete/games ?games]
;        [?event :athlete/event ?event-name]]
;      olympic-db
;      [:person/id 30009]
;      [:games/name "1992 Summer"]
;      [:event/name "Basketball Men's Basketball"])))
;
;(time
;  (map
;    (juxt (comp :person/name :athlete/name) (comp :event/name :athlete/event))
;    (intersection
;      (:athlete/_city (d/entity olympic-db [:city/name "Barcelona"]))
;      (:athlete/_medal (d/entity olympic-db [:medal/name "Gold"]))
;      (:athlete/_team (d/entity olympic-db [:team/name "United States"])))))
;
;(time
;  (->> [:city/name "Barcelona"]
;       (d/entity olympic-db)
;       :athlete/_city
;       (filter (fn [{{m :medal/name} :athlete/medal {t :team/name} :athlete/team}]
;                 (and (= "Gold" m) (= "United States" t))))
;       (map (juxt :athlete/name :athlete/event))
;       count))

;(def olympic-db
;  (-> (db/empty-db schema)
;      (d/db-with (map noc noc-regions))
;      (d/db-with (map (fn [a] [:db.fn/call normalize a]) athletes))
;      ))

;(count naive-db)
;=> 3703365
;(count olympic-db)
;=> 5089128
;(mm/measure naive-db)
;=> "422.7 MB"
;(mm/measure olympic-db)
;=> "444.0 MB"