(ns datascript-playground.olympics.model
  (:require [datascript-playground.olympics.core :refer [noc-regions athletes]]
            [datascript.db :as db]
            [datascript.core :as d]
            [clojure.set :refer [intersection]]))


;Note that sometimes the region is in the note.
;Another good example of trashy data
;(->> noc-regions
;     (filter :notes)
;     (map (juxt :region :notes)))
(defn noc [{:keys [noc region notes]}]
  (let [regions (cond-> [] region (conj region) notes (conj notes))]
    {:noc/name   noc
     :noc/region (map (fn [r] {:region/name r}) regions)}))

(def uid {:db/unique :db.unique/identity})
(def single-ref {:db/valueType :db.type/ref :db/cardinality :db.cardinality/one})
(def multi-ref {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many})

(defn extant [db {:keys [id games event]}]
  (intersection
    (:athlete/_id (d/entity db [:person/id id]))
    (:athlete/_games (d/entity db [:games/name games]))
    (:athlete/_event (d/entity db [:event/name event]))))

(defn normalize [{:keys [sport noc age sex name city year season event
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

(defn athlete [db m]
  (when-not (extant db m)
    [(normalize m)]))

(def schema
  {:noc/name       uid
   :noc/region     multi-ref

   ;Atomic entities
   :person/id      uid
   :person/name    uid
   :person/sex     uid
   :sport/name     uid
   :event/name     uid
   :team/name      uid
   :games/name     uid
   :city/name      uid
   :season/name    uid
   :year/value     uid
   :medal/name     uid

   :athlete/id     single-ref
   :athlete/name   single-ref
   :athlete/sex    single-ref
   :athlete/team   single-ref
   :athlete/noc    single-ref

   :games/games  single-ref
   :games/year   single-ref
   :games/season single-ref
   :games/city   single-ref

   :event/sport  single-ref
   :event/event  single-ref
   :event/medal  single-ref})

(def olympic-db
  (-> (db/empty-db schema)
      (d/db-with (map noc noc-regions))
      (d/db-with (map (fn [m] [:db.fn/call athlete m]) (take 10 athletes)))))