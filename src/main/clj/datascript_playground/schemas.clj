(ns datascript-playground.schemas
  (:require [datascript.core :as d]
            [datascript.db :as db]))

;https://docs.datomic.com/cloud/schema/schema-reference.html
;https://github.com/kristianmandrup/datascript-tutorial/blob/master/create_schema.md
;https://github.com/tonsky/datascript/wiki/Tips-&-tricks

;Produces 6 entities with 16 datoms
(def db0
  (d/db-with
    (db/empty-db {})
    [{:name "Mark" :spouse "Becky" :child "Chloe"}
     {:name "Becky" :spouse "Mark" :child "Chloe"}
     {:name "Mark" :spouse "Becky" :child "Jenny"}
     {:name "Becky" :spouse "Mark" :child "Jenny"}
     {:name "Chloe" :sibling "Jenny"}
     {:name "Jenny" :sibling "Chloe"}]))

(d/q
  '[:find ?e
    :in $
    :where
    [?e :name "Mark"]]
  db0)

;(d/pull db0 '[*] [:name "Mark"])

;4 entities. However, child information is lost.
(def db1
  (d/db-with
    (db/empty-db {:name {:db/unique :db.unique/identity}})
    [{:name "Mark" :spouse "Becky" :child "Chloe"}
     {:name "Becky" :spouse "Mark" :child "Chloe"}
     {:name "Mark" :spouse "Becky" :child "Jenny"}
     {:name "Becky" :spouse "Mark" :child "Jenny"}
     {:name "Chloe" :sibling "Jenny"}
     {:name "Jenny" :sibling "Chloe"}]))

(d/pull db1 '[*] [:name "Mark"])

;4 entities, but no relationships
(def db2
  (d/db-with
    (db/empty-db {:name  {:db/unique :db.unique/identity}
                  :child {:db/cardinality :db.cardinality/many}})
    [{:name "Mark" :spouse "Becky" :child "Chloe"}
     {:name "Becky" :spouse "Mark" :child "Chloe"}
     {:name "Mark" :spouse "Becky" :child "Jenny"}
     {:name "Becky" :spouse "Mark" :child "Jenny"}
     {:name "Chloe" :sibling "Jenny"}
     {:name "Jenny" :sibling "Chloe"}]))

(d/pull db2 '[*] [:name "Mark"])

;Full on schema
(def db3
  (d/db-with
    (db/empty-db {:name    {:db/unique :db.unique/identity}
                  :spouse  {:db/cardinality :db.cardinality/one
                            :db/valueType   :db.type/ref}
                  :child   {:db/cardinality :db.cardinality/many
                            :db/valueType   :db.type/ref}
                  :sibling {:db/cardinality :db.cardinality/many
                            :db/valueType   :db.type/ref}
                  ;:db.unique/value is for identity attributes
                  :gov-id  {:db/unique :db.unique/value}})
    [{:name "Mark" :gov-id 123}
     {:name "Becky" :gov-id 987}
     {:name "Chloe" :gov-id 231}
     {:name "Jenny" :gov-id 986}
     {:name "Mark" :spouse {:name "Becky"} :child [{:name "Chloe"} {:name "Jenny"}]}
     {:name "Becky" :spouse {:name "Mark"} :child [{:name "Chloe"} {:name "Jenny"}]}
     {:name "Chloe" :sibling {:name "Jenny"}}
     {:name "Jenny" :sibling {:name "Chloe"}}]))

;Full on schema
(def db4
  (d/db-with
    (db/empty-db {:name    {:db/unique :db.unique/identity}
                  :spouse  {:db/cardinality :db.cardinality/one
                            :db/valueType   :db.type/ref}
                  :child   {:db/cardinality :db.cardinality/many
                            :db/valueType   :db.type/ref}
                  :sibling {:db/cardinality :db.cardinality/many
                            :db/valueType   :db.type/ref}
                  ;:db.unique/value is for identity attributes
                  :gov-id  {:db/unique :db.unique/value}})
    [{:name   "Mark" :gov-id 123
      :spouse {:name   "Becky"
               :gov-id 987
               :spouse [:name "Mark"]
               :child  [{:name    "Chloe" :gov-id 231
                         :sibling [{:name    "Jenny"
                                    :gov-id  986
                                    :sibling [[:name "Chloe"]]}]}
                        {:name "Jenny"}]}
      :child  [[:name "Chloe"] [:name "Jenny"]]}]))

(def basic-family-db
  (d/db-with
    (db/empty-db {:name   {:db/unique :db.unique/identity}
                  :spouse {:db/cardinality :db.cardinality/one
                           :db/valueType   :db.type/ref}
                  :child  {:db/cardinality :db.cardinality/many
                           :db/valueType   :db.type/ref}})
    [{:name "Mark" :gender "M" :age 30}
     {:name "Becky" :gender "F" :age 30}
     {:name "Chloe" :gender "F" :age 8}
     {:name "Jenny" :gender "F" :age 6}
     {:name   "Mark"
      :spouse {:name "Becky"}
      :child  [{:name "Chloe"} {:name "Jenny"}]}
     {:name   "Becky"
      :spouse {:name "Mark"}
      :child  [{:name "Chloe"} {:name "Jenny"}]}]))

(def basic-family-db1
  (d/db-with
    (db/empty-db {:name   {:db/unique :db.unique/identity}
                  :spouse {:db/cardinality :db.cardinality/one
                           :db/valueType   :db.type/ref}
                  :child  {:db/cardinality :db.cardinality/many
                           :db/valueType   :db.type/ref}})
    [{:name   "Mark" :gender "M" :age 30
      :spouse {:name  "Becky" :gender "F" :age 30
               :child [{:name "Chloe"}
                       {:name "Jenny" :gender "F" :age 6}]}
      :child  [{:name "Chloe" :gender "F" :age 8}
               {:name "Jenny"}]}]))

(d/q
  '[:find ?name .
    :in $ ?e
    :with
    :where
    [?e :spouse ?n]
    [?n :name ?name]]
  db3 [:name "Becky"])

;Can pull on entity id and db/unique (identity or value) keys
(d/pull db3 '[*] 1)
(d/pull db3 '[*] [:name "Mark"])

(d/pull db3 '[:name :gov-id {:spouse 1} {:child 1}] [:gov-id 987])
(d/pull db3 '[:name :gov-id {:spouse 3} {:child 1}] [:gov-id 987])

;Backreferences
(d/pull db3 '[:_child] [:name "Chloe"])
(d/pull db3 '[{:_child [:name]}] [:name "Chloe"])
(d/pull db4 '[{:_child [:name]}] [:name "Chloe"])

(let [{{sn :name} :spouse :keys [name child]} (d/entity db3 [:name "Mark"])]
  [:name name :spouse sn :children (map :name child)])

(->> [:name "Mark"]
     (d/entity db3)
     :spouse
     :child
     (map :_child))
