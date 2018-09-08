(ns datascript-playground.olympics.v3-unique-refs-fast
  (:require [datascript.core :as d]
            [datascript-playground.olympics.core :refer [noc-regions athletes]]
            [datascript-playground.olympics.v1-refs :refer [athlete no-athlete-db] :as o]))

(defn installed-athletes [db athletes]
  (d/q
    '[:find ?id ?games ?event
      :in $ [[?id ?games ?event]]
      :where
      [?aid :person/id ?id]
      [?gid :games/name ?games]
      [?eid :event/name ?event]
      [?e :athlete/id ?aid]
      [?e :athlete/games ?gid]
      [?e :athlete/event ?eid]]
    db (map (juxt :id :games :event) athletes)))

(defn new-athletes [db athletes]
  (let [extant (installed-athletes db athletes)]
    (->> athletes
         (remove (comp extant (juxt :id :games :event)))
         (map athlete))))

(defn create-olympic-db []
  (d/db-with no-athlete-db [[:db.fn/call new-athletes athletes]]))

;(def olympic-db
;  (time (create-olympic-db)))

(defonce olympic-db-redux
  (time
    (-> o/olympic-db
        (d/db-with [[:db.fn/call new-athletes athletes]])
        (d/db-with [[:db.fn/call new-athletes athletes]]))))

;(time
;  (-> (create-olympic-db)
;      (d/db-with [[:db.fn/call new-athletes athletes]])
;      (d/db-with [[:db.fn/call new-athletes athletes]])
;      count))

(defn aq [n]
  (reduce into '[:find ?e :in $]
          [(map (comp symbol #(str "?v" %)) (range n))
           [:where]
           (mapv (fn [x] [(symbol (str "?r" x)) (symbol "_") (symbol (str "?v" x))]) (range n))
           (mapv (fn [x] [(symbol "?e") (symbol (str "?a" x)) (symbol (str "?r" x))]) (range n))]))

(d/q
  '[:find (pull ?e [*])
    :in $ ?v0 ?v1 ?v2 ?v3 ?v4
    :where
    [?r0 _ ?v0]
    [?r1 _ ?v1]
    [?r2 _ ?v2]
    [?r3 _ ?v3]
    [?r4 _ ?v4]
    [?e ?a0 ?r0]
    [?e ?a1 ?r1]
    [?e ?a2 ?r2]
    [?e ?a3 ?r3]
    [?e ?a4 ?r4]]
  olympic-db-redux "Gold" 1992 "M" "France" "Fencing")

(->>
  (d/q
    '[:find ?e ?a ?v
      :in $ ?v0 ?v1 ?v2 ?v3 ?v4
      :where
      [?r0 _ ?v0]
      [?r1 _ ?v1]
      [?r2 _ ?v2]
      [?r3 _ ?v3]
      [?r4 _ ?v4]
      [?e ?a0 ?r0]
      [?e ?a1 ?r1]
      [?e ?a2 ?r2]
      [?e ?a3 ?r3]
      [?e ?a4 ?r4]
      ;Broken for non refs :(
      [?e ?a ?vref]
      [?vref _ ?v]]
    olympic-db-redux "Gold" 1992 "M" "France" "Fencing")
  (group-by first)
  (map (fn [[k v]] (reduce (fn [m [_ a v]] (assoc m a v)) {} v))))

(time
  (->>
    (d/q
      '[:find ?e ?a ?v
        :in $ ?sport-name ?year-value ?medal-name
        :where
        [?sport :sport/name ?sport-name]
        [?year :year/value ?year-value]
        [?medal :medal/name ?medal-name]
        [?e _ ?sport]
        [?e _ ?year]
        [?e _ ?medal]
        [?e ?a ?vref]
        [?vref _ ?v]]
      olympic-db-redux "Basketball" 1992 "Gold")
    (group-by first)
    (map (fn [[k v]] (reduce (fn [m [_ a v]] (assoc m a v)) {} v)))))