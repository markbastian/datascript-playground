(ns datascript-playground.serialization
  (:require [datascript.db :as db]
            [datascript.core :as d]
            [clojure.pprint :as pp]
            [datascript.transit :as dt])
  (:import (java.io ByteArrayOutputStream ByteArrayInputStream)))

(def parker-family
  (d/db-with
    (db/empty-db {:name   {:db/unique :db.unique/identity}
                  :alias  {:db/unique      :db.unique/value
                           :db/cardinality :db.cardinality/many}
                  :spouse {:db/cardinality :db.cardinality/one
                           :db/valueType   :db.type/ref}
                  :child  {:db/cardinality :db.cardinality/many
                           :db/valueType   :db.type/ref}})
    [{:name "Peter Parker" :gender "M" :alias ["Spider-Man" "Spidey"]}
     {:name "Richard Parker" :gender "M" :spouse {:name "Mary Parker"}}
     {:name "Mary Parker" :gender "F" :spouse {:name "Richard Parker"}}
     {:name "Ben Parker" :gender "M" :spouse {:name "May Parker"}}
     {:name "May Parker" :gender "F" :spouse {:name "Ben Parker"}}
     {:name "Richard Parker" :child {:name "Peter Parker"}}
     {:name "Mary Parker" :child {:name "Peter Parker"}}
     {:child  [{:name "Ben Parker"}
               {:name "Richard Parker"}]
      :gender "M"}
     {:child  [{:name "Ben Parker"}
               {:name "Richard Parker"}]
      :gender "F"}]))

(def read-db #(clojure.edn/read-string {:readers datascript.core/data-readers} %))

(= parker-family
   (-> parker-family pr-str read-db))

(= parker-family
   (-> parker-family
    (dt/write-transit-str)
    (dt/read-transit-str)))

(dt/write-transit-str parker-family)

#_
(prn
  (= parker-family
   (read-db (transit/read reader))))