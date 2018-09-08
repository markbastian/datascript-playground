(ns datascript-playground.olympics.v0-naive
  (:require [datascript-playground.olympics.core :refer [noc-regions athletes]]
            [datascript.db :as db]
            [datascript.core :as d]))

;Note that sometimes the region is in the note.
;Another good example of trashy data
;(->> noc-regions
;     (filter :notes)
;     (map (juxt :region :notes)))
(defn noc [{:keys [noc region notes]}]
  (let [regions (cond-> [] region (conj region) notes (conj notes))]
    {:noc/name   noc
     :noc/region (map (fn [r] {:region/name r}) regions)}))

;The naive world view
(def naive-schema {})

(defonce naive-db
         (-> (db/empty-db naive-schema)
             (d/db-with noc-regions)
             (d/db-with athletes)))

(def incorrect-naive-schema {:id {:db/unique :db.unique/identity}})

(defonce incorrect-naive-db
         (-> (db/empty-db incorrect-naive-schema)
             (d/db-with noc-regions)
             (d/db-with athletes)))

(time
  (count
    (d/q
      '[:find ?name ?event
        :in $ ?city ?medal ?team-name
        :where
        [?e :city ?city]
        [?e :medal ?medal]
        [?e :team ?team-name]
        [?e :event ?event]
        [?e :name ?name]]
      naive-db "Barcelona" "Gold" "United States")))

(time
  (count
    (d/q
      '[:find ?event
        :in $ ?city ?medal ?team-name
        :where
        [?e :city ?city]
        [?e :medal ?medal]
        [?e :team ?team-name]
        [?e :event ?event]
        ;[?e :name ?name]
        ]
      naive-db "Barcelona" "Gold" "United States")))

(time
  (count
    (d/q
      '[:find ?event ?medal
        :in $ ?city ?team-name
        :where
        [?e :city ?city]
        [?e :medal ?medal]
        [?e :team ?team-name]
        [?e :event ?event]
        ;[?e :name ?name]
        ]
      naive-db "Barcelona" "United States")))