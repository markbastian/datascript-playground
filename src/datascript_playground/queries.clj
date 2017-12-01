(ns datascript-playground.queries
  (:require [datascript-playground.core :as core]
            [datascript.core :as d]
            [datascript.db :as db]))

;https://github.com/tonsky/datascript/wiki/API-overview
;A datom is a 5-tuple consisting of:
;  Entity ID
;  Attribute
;  Value
;  Transaction ID
;  Whether the fact is being added or retracted

(def test-db
  (-> (d/empty-db)
      (d/db-with core/sample-data)
      (d/db-with [[:db/add 1 :favorite-food "Pizza"]])))

;;Filtering

;Find id #2
(d/filter
  test-db
  (fn [db [entity-id attribute value tx-id retracted? :as datom]]
    (= 2 entity-id)))

;Find datoms of minors. Note that this drops the rest of the entity!
(d/filter
  test-db
  (fn [db [entity-id attribute value tx-id retracted? :as datom]]
    (and (= :age attribute) (<= value 20))))

;;Pull
(d/pull test-db [:name :age :food] 1)
(d/pull-many test-db [:name :age :food] [1 2 4])

;;Queries
; see http://www.learndatalogtoday.org

;Get all the names
;[?foo ...] gives a vector vs. a set
(d/q '[:find [?name ...]
       :where
       [?e :name ?name]]
     test-db)

;Find minors
(d/q '[:find ?name
       :where
       [?e :name ?name]
       [?e :age ?age]
       ;predicate here
       [(< ?age 21)]]
     test-db)

;define custom fn.
(defn status [age]
  (if (< age 21) :minor :adult))

;Add custom fields using above function
(d/q '[:find ?name ?status
       :where
       [?e :name ?name]
       [?e :age ?age]
       ;Use custom function. Must be ns-qualified.
       [(datascript-playground.queries/status ?age) ?status]]
     test-db)

;Total the ages of all the minors using an existing function
(d/q '[:find (sum ?age)
       :where
       [?e :age ?age]
       [(< ?age 21)]]
     test-db)

;Join favorite foods on name and add some custom data
(let [a (d/db-with
          (d/empty-db)
          [{:name "Becky" :age 21}
           {:name "Mark" :age 23}
           {:name "Chloe" :age 9}
           {:name "Chloe" :age 90}
           {:name "Jenny" :age 18}])
      b (d/db-with
          (d/empty-db)
          [{:name "Mark" :food "Tacos"}
           {:name "Chloe" :food "Tots"}])]
  (d/q
    '[:find ?n ?f ?a ?status
      :in $a $b
      :where
      [$a ?e :name ?n]
      [$a ?e :age ?a]
      [$b ?x :name ?n]
      [$b ?x :food ?f]
      [(datascript-playground.queries/status  ?a) ?status]]
    a b))

;Same join, but with destructured args.
(let [a (d/db-with
          (d/empty-db)
          [{:name "Becky" :age 21}
           {:name "Mark" :age 23}
           {:name "Chloe" :age 9}
           {:name "Chloe" :age 90}
           {:name "Jenny" :age 18}])
      b [["Mark" "Pizza"]
         ["Chloe" "Tots"]]]
  (d/q
    '[:find ?name ?food ?age
      :in $a [[?name ?food]]
      :where
      [$a ?e :name ?name]
      [$a ?e :age ?age]]
    a b))

;Sum ages of minors and adults, but doesn't work due to duplicate values
(let [db (d/db-with
           (d/empty-db)
           [{:name "Becky" :age 21}
            {:name "Mark" :age 23}
            ;{:name "John" :age 23}
            {:name "Chloe" :age 9}
            ;{:name "Chloe" :age 9}
            {:name "Chloe" :age 90}
            {:name "Jenny" :age 18}])]
  (d/q
    '[:find ?minor (sum ?a)
      :where
      [?e :age ?a]
      [(< ?a 21) ?minor]]
    db))

;Sum ages of minors and adults - works due to with
(let [db (d/db-with
           (d/empty-db)
           [{:name "Becky" :age 21}
            {:name "Mark" :age 23}
            {:name "John" :age 23}
            {:name "Chloe" :age 9}
            ;Try :with ?e instead.
            ;{:name "Chloe" :age 9}
            {:name "Chloe" :age 90}
            {:name "Jenny" :age 18}])]
  (d/q
    '[:find ?minor (sum ?a)
      ;or with ?e
      :with ?name
      :where
      [?e :age ?a]
      [?e :name ?name]
      [(< ?a 21) ?minor]]
    db))

;Bad example from http://docs.datomic.com/query.html#with
(d/q
  '[:find (sum ?heads) .
    :in [[_ ?heads]]]
  [["Cerberus" 3]
   ["Medusa" 1]
   ["Cyclops" 1]
   ["Chimera" 1]])

;Good example from http://docs.datomic.com/query.html#with
(d/q
  '[:find (sum ?heads) .
    :with ?monster
    :in [[?monster ?heads]]]
  [["Cerberus" 3]
   ["Medusa" 1]
   ["Cyclops" 1]
   ["Chimera" 1]])

;Count instances by age and sum the ages
(let [a (d/db-with
          (d/empty-db)
          [{:name "Becky" :age 21}
           {:name "Mark" :age 23}
           {:name "Chloe" :age 9}
           {:name "Chloe" :age 90}
           {:name "Jenny" :age 18}])]
  (d/q
    '[:find ?n (count ?a) (sum ?a)
      :in $a
      :where
      [$a ?e :name ?n]
      [$a ?e :age ?a]]
    a))
