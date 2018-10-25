(ns datascript-playground.superheroes.entity-batman
  (:require [datascript.db :as db]
            [datascript.core :as d]))

(d/db-with
  (db/empty-db {:name    {:db/unique :db.unique/identity}
                :alias   {:db/unique      :db.unique/value
                          :db/cardinality :db.cardinality/many}
                :powers  {:db/cardinality :db.cardinality/many}
                :weapons {:db/cardinality :db.cardinality/many}
                :nemesis {:db/valueType   :db.type/ref
                          :db/cardinality :db.cardinality/many}})
  [{:name      "Batman"
    :alias     "Bruce Wayne"
    :powers    ["Rich"]
    :weapons   ["Belt" "Kryptonite Spear"]
    :alignment "Chaotic Good"
    :nemesis   [{:name "Joker"} {:name "Penguin"}]}])