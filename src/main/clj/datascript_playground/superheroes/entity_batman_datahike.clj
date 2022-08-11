(ns datascript-playground.superheroes.entity-batman-datahike
  (:require [datahike.api :as d]
            [clojure.java.io :as io]))

(def schema
  [{:db/ident       :name
    :db/valueType   :db.type/string
    :db/unique      :db.unique/identity
    :db/cardinality :db.cardinality/one}

   {:db/ident       :alias
    :db/valueType   :db.type/string
    :db/unique      :db.unique/identity
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

(def uri (str "datahike:" (io/as-url (doto
                                       (io/file "tmp/batman")
                                       io/make-parents))))

(d/create-database uri)
(def conn (d/connect uri))
(d/transact conn schema)
(d/transact conn data)

(d/q
  '[:find ?name .
    :in $ ?enemy-name
    :where
    [?e :name ?name]
    [?e :nemesis ?n]
    [?n :name ?enemy-name]]
  @conn "Joker")

(comment
  (do
    (d/release conn)
    (d/delete-database uri)))
