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
     {:name "Richard Parker" :child {:name "Peter Parker"}}
     {:name "Mary Parker" :child {:name "Peter Parker"}}
     {:child  [{:name "Ben Parker"}
               {:name "Richard Parker"}]
      :gender "M"}
     {:child  [{:name "Ben Parker"}
               {:name "Richard Parker"}]
      :gender "F"}]))

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
  :gender "F"}]

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

(d/pull parker-family '[*] 4)
(d/pull parker-family '[*] [:name "Ben Parker"])
(d/pull parker-family '[*] [:name "Richard Parker"])
(d/pull parker-family '[*] [:name "Peter Parker"])
(d/pull parker-family '[{:_child [*]}] [:name "Peter Parker"])
(d/pull parker-family '[{:_child
                         [{:_child
                           [{:child [:name]}]}]}]
        [:name "Peter Parker"])

;Using backreferences, walk back two generations
(let [{parents :_child} (d/entity parker-family [:alias "Spidey"])
      grandparents (mapcat :_child parents)]
  (->> grandparents
       (mapcat :child)  ;Get all children of the grandparents
       distinct         ;Remove duplicates
       (remove parents) ;Remove the parents from the results
       (map :name)))    ;Get the names of the resulting entities


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

;(def parker-family-old
;  (d/db-with
;    (db/empty-db {:name   {:db/unique :db.unique/identity}
;                  :alias  {:db/unique      :db.unique/value
;                           :db/cardinality :db.cardinality/many}
;                  :spouse {:db/cardinality :db.cardinality/one
;                           :db/valueType   :db.type/ref}
;                  :child  {:db/cardinality :db.cardinality/many
;                           :db/valueType   :db.type/ref}})
;    [{:name "Peter Parker" :gender "M" :alias ["Spider-Man" "Spidey"]}
;     {:name "Richard Parker" :gender "M" :spouse {:name "Mary Parker"}}
;     {:name "Mary Parker" :gender "F" :spouse {:name "Richard Parker"}}
;     {:name "Ben Parker" :gender "M" :spouse {:name "May Parker"}}
;     {:name "May Parker" :gender "F" :spouse {:name "Ben Parker"}}
;     {:name "Richard Parker" :child [:name "Peter Parker"]}
;     {:name "Mary Parker" :child [:name "Peter Parker"]}
;     {:name "Grandpa Parker" :child [[:name "Ben Parker"]
;                                     [:name "Richard Parker"]]}]))

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