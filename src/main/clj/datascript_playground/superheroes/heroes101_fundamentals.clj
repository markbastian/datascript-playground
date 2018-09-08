(ns datascript-playground.superheroes.heroes101-fundamentals
  (:require [datascript-playground.superheroes.core :as shc]
            [clojure.set :refer [rename-keys]]
            [datascript.db :as db]
            [datascript.core :as d]))

(def hero-db0
  (-> (db/empty-db {})
      (d/db-with shc/hero-powers)
      (d/db-with shc/hero-info)))

(d/q
  '[:find ?n
    :in $
    :where
    [?e :name ?n]
    [?e :levitation false]
    [?e :animal-attributes true]]
  hero-db0)

;Notice there's no great way to grab data from the db
(d/pull hero-db0 '[*] 1399)
(d/pull hero-db0 '[*] 665)

;The name attribute now gives us an index and implicit joins
(def hero-db1
  (-> (db/empty-db {:name {:db/unique :db.unique/identity}})
      (d/db-with shc/hero-powers)
      (d/db-with shc/hero-info)))

;Find Yoda's powers
(d/q
  '[:find [?a ...]
    :in $ ?n
    :where
    [?e :name ?n]
    [?e ?a true]]
  hero-db1 "Yoda")

;I can now use lookup refs
(d/pull hero-db1 '[*] [:name "Yoda"])

;Find Yoda's powers
(d/q
  '[:find [?a ...]
    :in $ ?e
    :where
    [?e ?a true]]
  hero-db1 [:name "Yoda"])

;eavt aevt avet
(count (d/datoms hero-db1 :eavt))
(count (d/datoms hero-db1 :aevt))
;Attribute value pairs are identity and value
;empty
(count (d/datoms hero-db0 :avet))
;Smaller - AVET is "attribute-value" and is only present for unique values and indexed values
(count (d/datoms hero-db1 :avet))

;Pros of this approach
; * Easy
