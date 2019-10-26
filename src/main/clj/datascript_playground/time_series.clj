(ns datascript-playground.time-series
  (:require [datascript.core :as d]
            [clojure.string :as cs]))

(def schema
  {:person/name          {:db/unique :db.unique/identity}
   :person/favorite-food {:db/cardinality :db.cardinality/many
                          :db/valueType   :db.type/ref
                          :db/isComponent true}})

(def data
  {:person/name          "Mark"
   :person/dob           #inst"1980-01-01"
   :person/favorite-food [{:annual/date #inst"1981-01-01" :annual/food :whirled-peas}
                          {:annual/date #inst"1989-01-01" :annual/food :corn-dogs}
                          {:annual/date #inst"1993-01-01" :annual/food :pizza}
                          {:annual/date #inst"2000-01-01" :annual/food :sushi}]})

;If the database is ephemeral or you don't need to otherwise
; worry about duplication this is sufficient
(def db (d/db-with (d/empty-db schema) [data]))

(def existing-food-ids-query
  '[:find ?date ?food ?e
    :in $ ?p [[?date ?food]]
    :where
    [?p :person/favorite-food ?e]
    [?e :annual/date ?date]
    [?e :annual/food ?food]])

(defn add-person [db {:keys [person/name person/favorite-food] :as person}]
  (let [keyfn (juxt :annual/date :annual/food)
        ks (map keyfn favorite-food)
        id-data (d/q existing-food-ids-query db [:person/name name] ks)]
    (let [id-map (reduce (fn [m v] (assoc m (pop v) (peek v))) {} id-data)
          foods (for [food favorite-food :let [k (keyfn food) id (id-map k (cs/join "-" k))]]
                  (assoc food :db/id id))]
      [(assoc person :person/favorite-food foods)])))

(= (d/db-with (d/empty-db schema) [[:db.fn/call add-person data]])
   (d/db-with
     (d/empty-db schema)
     [[:db.fn/call add-person data]
      [:db.fn/call add-person data]
      [:db.fn/call add-person data]]))

(def db (d/db-with
          (d/empty-db schema)
          [[:db.fn/call add-person data]
           [:db.fn/call add-person data]
           [:db.fn/call add-person data]]))