(ns datascript-playground.superheroes.spider-man-datomic
  (:require [datomic.api :as d]))

(def schema
  [{:db/ident       :name
    :db/valueType   :db.type/string
    :db/unique      :db.unique/identity
    :db/cardinality :db.cardinality/one}

   {:db/ident       :gender
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}

   {:db/ident       :alias
    :db/valueType   :db.type/string
    :db/unique      :db.unique/value
    :db/cardinality :db.cardinality/many}

   {:db/ident       :spouse
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}

   {:db/ident       :child
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/many}])

(def data
  [{:name "Peter Parker" :gender "M" :alias ["Spider-Man" "Spidey"]}
   {:name "Richard Parker" :gender "M" :spouse {:name "Mary Parker"}}
   {:name "Mary Parker" :gender "F" :spouse {:name "Richard Parker"}}
   {:name "Ben Parker" :gender "M" :spouse {:name "May Parker"}}
   {:name "May Parker" :gender "F" :spouse {:name "Ben Parker"}}
   {:name "Richard Parker" :child {:name "Peter Parker"}}
   {:name "Mary Parker" :child {:name "Peter Parker"}}
   {:name "Grandpa Parker" :child [{:name "Ben Parker"}
                                   {:name "Richard Parker"}]}])

(d/create-database "datomic:mem://parker")
(defonce conn (d/connect "datomic:mem://parker"))

@(d/transact conn schema)

@(d/transact conn data)
