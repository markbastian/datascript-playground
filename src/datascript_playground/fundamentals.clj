(ns datascript-playground.fundamentals
  (:require [datascript-playground.core :as core]
            [datascript.core :as d]
            [datascript.db :as db]
            [clojure.string :as cs]
            [clojure.pprint :as pp]))

;;TL;DR -
;; datascript dbs are just a useful immutable value collection
;; datascript connections are like atoms, but for datascript dbs.

;;Create an empty db
;;Immutable, empty value collection as (), [], {}, or #{}
(d/empty-db)

;https://github.com/tonsky/datascript/wiki/API-overview
;A datom is a 5-tuple consisting of:
;  Entity ID
;  Attribute
;  Value
;  Transaction ID
;  Whether the fact is being added or retracted

;;Insert some datoms. A datascript db is a seq of datoms.
(d/db-with
  (d/empty-db)
  [(d/datom 1 :age  17)
   (d/datom 1 :name "Ivan")])

;Insert some vector datoms.
(d/db-with
  (d/empty-db)
  [[:db/add 1 :name "Petr"]
   [:db/add 1 :age 44]
   [:db/add 2 :name "Ivan"]
   [:db/add 2 :age 25]])

;Insert some maps. datom splitting just works.
(d/db-with
  ;We'll add an index on age, too
  (d/empty-db { :age { :db/index true }})
  core/sample-data)

;;Treated like a collection.
;;Contents are not of the same size and can be repeatedly added (db-with isn't one-shot).
(reduce
  (fn [db v]
    (d/db-with db (vector v)))
  (d/empty-db)
  [{:name "Mark"}
   {:movie "Star Wars"}
   {:name "Bill" :movie "Star Wars"}])

;Note that keys MUST be homogeneous (for comparability?),
; but records don't have any sense of "completeness"
(-> (d/empty-db)
    (d/db-with core/sample-data)
    (d/db-with [{:name "Jack"}
                ;{"name" 34} ;bad!
                {:name "Jill"}
                [:db/add 1 :favorite-food "Pizza"]]))

;;In real life you may want state.
;;d/create-conn is to d/empty-db as atom is to {}.
;;State vs. value
(def conn (d/create-conn {}))

;;Insert with transactions
(d/transact! conn core/sample-data)

;Recap...
;Local value
(def test-db
  (-> (d/empty-db)
      (d/db-with core/sample-data)
      (d/db-with [[:db/add 1 :favorite-food "Pizza"]])))

;vs. transaction
(d/transact! conn [[:db/add 1 :favorite-food "Pizza"]])

;You can listen ala watches
(d/listen!
  conn
  :foo
  (fn [{:keys [db-before db-after tx-data tempids tx-meta]}]
    (let [[o n] tx-data]
      (pp/pprint [{:dropped o}
                  {:added n}]))))

(d/transact! conn [[:db/add 1 :favorite-food "Ham"]])
(d/transact! conn [[:db/add 1 :favorite-food "Cheese"]])
(d/transact! conn [[:db/add 1 :pet "Dog"]])

