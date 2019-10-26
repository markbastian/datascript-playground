(ns datascript-playground.superheroes.entity-batman-datomic
  (:require [datomic.api :as d]))

(def schema
  [{:db/ident       :name
    :db/valueType   :db.type/string
    :db/unique      :db.unique/identity
    :db/cardinality :db.cardinality/one}

   {:db/ident       :alias
    :db/valueType   :db.type/string
    :db/unique      :db.unique/value
    :db/cardinality :db.cardinality/many}

   {:db/ident       :alignment
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}

   {:db/ident       :powers
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/many}

   {:db/ident       :weapons
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/many}

   {:db/ident       :nemesis
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/many}])

(def data
  [{:name      "Batman"
    :alias     "Bruce Wayne"
    :powers    ["Rich"]
    :weapons   ["Belt" "Kryptonite Spear"]
    :alignment "Chaotic Good"
    :nemesis   [{:name "Joker"} {:name "Penguin"}]}])

(d/create-database "datomic:mem://batman")
(defonce conn (d/connect "datomic:mem://batman"))

@(d/transact conn schema)

@(d/transact conn data)

