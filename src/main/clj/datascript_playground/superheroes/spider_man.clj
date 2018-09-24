(ns datascript-playground.superheroes.spider-man
  (:require [datascript.db :as db]
            [datascript.core :as d]))


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
     {:name "Richard Parker" :child [:name "Peter Parker"]}
     {:name "Mary Parker" :child [:name "Peter Parker"]}
     {:name "Grandpa Parker" :child [[:name "Ben Parker"]
                                     [:name "Richard Parker"]]}]))

(d/q
  '[:find [?uncle-name ...]
    :in $ ?person
    :where
    [?parent :child ?person]
    [?grandparent :child ?parent]
    [?grandparent :child ?uncle]
    [?uncle :gender "M"]
    [(not= ?parent ?uncle)]
    [?uncle :name ?uncle-name]]
  parker-family [:name "Peter Parker"])

(d/q
  '[:find (pull ?parent-sibling [:name {:spouse [:name]}])
    :in $ ?person
    :where
    [?parent :child ?person]
    [?grandparent :child ?parent]
    [?grandparent :child ?parent-sibling]
    [(not= ?parent ?parent-sibling)]]
  parker-family [:alias "Spidey"])

;(def parker-family
;  (d/db-with
;    (db/empty-db {:name   {:db/unique :db.unique/identity}
;                  :spouse {:db/cardinality :db.cardinality/one
;                           :db/valueType   :db.type/ref}
;                  :child  {:db/cardinality :db.cardinality/many
;                          :db/valueType   :db.type/ref}})
;    [{:name "Peter Parker" :gender "M"}
;     {:name "Richard Parker" :gender "M"}
;     {:name "Mary Parker" :gender "F"}
;     {:name "Ben Parker" :gender "M"}
;     {:name "May Parker" :gender "F"}
;     {:name "June Parker" :gender "F"}
;     {:name "Richard Parker" :child [:name "Peter Parker"]}
;     {:name "Mary Parker" :child [:name "Peter Parker"]}
;     {:name "Grandpa Parker" :child [[:name "Ben Parker"]
;                                     [:name "Richard Parker"]
;                                     [:name "June Parker"]]}]))

(d/q
  '[:find [?uncle-name ...]
    :in $ ?person-name
    :where
    [?person :name ?person-name]
    [?parent :child ?person]
    [?grandparent :child ?parent]
    [?grandparent :child ?uncle]
    [?uncle :gender "M"]
    [(not= ?parent ?uncle)]
    [?uncle :name ?uncle-name]]
  parker-family "Peter Parker")