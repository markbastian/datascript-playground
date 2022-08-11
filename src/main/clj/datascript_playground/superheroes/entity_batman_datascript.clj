(ns datascript-playground.superheroes.entity-batman-datascript
  (:require [datascript.core :as d]))

(def schema
  {:name    {:db/unique :db.unique/identity}
   :alias   {:db/unique      :db.unique/identity
             :db/cardinality :db.cardinality/many}
   :powers  {:db/cardinality :db.cardinality/many}
   :weapons {:db/cardinality :db.cardinality/many}
   :nemesis {:db/valueType   :db.type/ref
             :db/cardinality :db.cardinality/many}})

(d/db-with
  (d/empty-db schema)
  [{:name      "Batman"
    :alias     "Bruce Wayne"
    :powers    ["Rich"]
    :weapons   ["Belt" "Kryptonite Spear"]
    :alignment "Chaotic Good"
    :nemesis   [{:name "Joker"}
                {:name "Penguin"}]}])



(-> (d/empty-db schema)
    (d/db-with [{:name "Batman" :alias "Bruce Wayne" :alignment "Chaotic Good"}])
    (d/db-with [{:name "Superman" :alias "Clark Kent" :alignment "Lawful Good"}])
    (d/db-with [{:name "Batman" :alias "Clark Kent" :alignment "Neutral Neutral"}]))

(-> (d/empty-db schema)
    (d/db-with [{:alias "Bob"}])
    (d/db-with [{:alias "Bob" :alignment "Lawful Good"}]))