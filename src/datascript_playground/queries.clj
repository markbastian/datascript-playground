(ns datascript-playground.queries
  (:require [datascript-playground.core :as core]
            [datascript.core :as d]
            [datascript.db :as db]
            [clojure-csv.core :as csv]
            [clojure.string :as cs]
            [clojure.edn :as edn]))

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

;Stress test of join. Add an index later.
#_(time
  (let [n 1000000
        a (map (fn [i] {:id i :x (rand)}) (range n))
        b (map (fn [i] {:id i :y (rand-int 1000)}) (range n))
        dba (time (d/db-with (d/empty-db {:id {:db/index true}}) a))
        dbb (time (d/db-with (d/empty-db {:id {:db/index true}}) b))]
    (count
      (time (d/q
              '[:find ?id ?x ?y
                :in $a $b
                :where
                [$a ?e :id ?id]
                [$a ?e :x ?x]
                [$b ?b :id ?id]
                [$b ?b :y ?y]]
              dba dbb)))))

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

;Predicate/function goodness
(d/q
  '[:find ?celsius .
    :in ?fahrenheit
    :where [(- ?fahrenheit 32) ?f-32]
    [(/ ?f-32 1.8) ?celsius]]
  32)

(d/q
  ;; query
  '[:find [?prefix ...]
    :in [?word ...]
    :where [(subs ?word 0 5) ?prefix]]
  ;; inputs
  ["hello" "antidisestablishmentarianism"])

;Get attributes of people
(let [a (d/db-with
          (d/empty-db)
          [{:name "Becky" :age 21 :color :red}
           {:name "Mark" :age 23 :size 1}
           {:name "Chloe" :age 9}
           {:name "Chloe" :age 90}
           {:name "Jenny" :age 18}])]
  (d/q
    '[:find ?attr
      :where
      [?e :name "Mark"]
      [?e ?attr]]
    a))

;Get attributes of people
(let [a (d/db-with
          (d/empty-db)
          [{:name "Mark" :age 23 :size 1}])]
  (d/q
    '[:find ?timestamp
      :where
      [?p :name "Mark" ?timestamp]]
    a))

;Somehow this should work
;https://github.com/tonsky/datascript/issues/86
;http://docs.datomic.com/query.html#rules
#_(let [a (d/db-with
          (d/empty-db)
          [{:name :rock :beats :scissors}
           {:name :scissors :beats :paper}
           {:name :paper :beats :rock}])]
  (d/q
    '[:find ?e .
      :in $ % ?a ?b
      :where [(winner $ ?e ?a ?b)]]
    a
    '[[(winner $ ?e ?a ?b)
       [$ ?e :beats ?b]
       [$ ?e :name ?a]]
      [(winner ?a ?b)
       [$ ?e :beats ?a]
       [$ ?e :name ?b]]]
    :paper
    :rock))

(defn kill-nils [m]
  (into {} (filter second m)))

(defn movie-data []
  (let [[f & rs] (->> "/Users/mbastian/Downloads/movie_metadata.csv" slurp csv/parse-csv)
        k (map (comp keyword #(cs/replace % #"_" "-")) f)]
    (map (fn [r]
           (-> (zipmap k (map #(cs/trim (cs/replace % #"\xA0" " ")) r))
               (update :actor-1-facebook-likes edn/read-string)
               (update :actor-2-facebook-likes edn/read-string)
               (update :actor-3-facebook-likes edn/read-string)
               (update :aspect-ratio edn/read-string)
               (update :budget edn/read-string)
               (update :cast-total-facebook-likes edn/read-string)
               (update :director-facebook-likes edn/read-string)
               (update :duration edn/read-string)
               (update :facenumber-in-poster edn/read-string)
               (update :gross edn/read-string)
               (update :imdb-score edn/read-string)
               (update :movie-facebook-likes edn/read-string)
               (update :num-critic-for-reviews edn/read-string)
               (update :num-user-for-reviews edn/read-string)
               (update :num-voted-users edn/read-string)
               (update :title-year edn/read-string)
               kill-nils)) rs)))

(def movie-data-db
  (d/db-with
    (d/empty-db)
    (movie-data)))

(d/q
  '[:find ?a
    ;:with ?e
    :where
    [?e :movie-title ?title]
    [?e :movie-title "Star Wars: Episode VII - The Force Awakens"]
    ;[?e :movie-title "Avatar"]
    ;[?e :actor-1-name ?name1]
    ;[?e :actor-2-name ?name2]
    ;[?e :actor-3-name ?name3]
    [?e ?a]
    ;[?e :budget ?budget]
    ;[(>= ?budget 300000000)]
    ]
  movie-data-db)