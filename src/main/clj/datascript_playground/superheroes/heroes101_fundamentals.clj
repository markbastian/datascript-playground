(ns datascript-playground.superheroes.heroes101-fundamentals
  (:require [datascript-playground.superheroes.core :as shc]
            [clojure.set :refer [rename-keys]]
            [datascript.db :as db]
            [datascript.core :as d]
            [clj-memory-meter.core :as mm]))

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

;Larger, but no avet data at all
{:memory-size "8.0 MB"
 :count-datoms 117579
 :count-eavt 117579
 :count-aevt 117579
 :count-avet 0}
(shc/stats hero-db0)

;Smaller due to joins on id
{:memory-size "7.9 MB"
 :count-datoms 116817
 :count-eavt 116817
 :count-aevt 116817
 :count-avet 739}
(shc/stats hero-db1)

;Pros of this approach
; * Easy
