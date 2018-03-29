(ns datascript-playground.schemas
  (:require [datascript.core :as d]
            [datascript.db :as db]))

;https://docs.datomic.com/cloud/schema/schema-reference.html
;https://github.com/kristianmandrup/datascript-tutorial/blob/master/create_schema.md
;https://github.com/tonsky/datascript/wiki/Tips-&-tricks

;Produces 6 entities with 16 datoms
(d/db-with
  (db/empty-db {})
  [{:name "Mark" :spouse "Becky" :child "Chloe"}
   {:name "Becky" :spouse "Mark" :child "Chloe"}
   {:name "Mark" :spouse "Becky" :child "Jenny"}
   {:name "Becky" :spouse "Mark" :child "Jenny"}
   {:name "Chloe" :sibling "Jenny"}
   {:name "Jenny" :sibling "Chloe"}])

;4 entities. However, child information is lost.
(d/db-with
  (db/empty-db {:name {:db/unique :db.unique/identity}})
  [{:name "Mark" :spouse "Becky" :child "Chloe"}
   {:name "Becky" :spouse "Mark" :child "Chloe"}
   {:name "Mark" :spouse "Becky" :child "Jenny"}
   {:name "Becky" :spouse "Mark" :child "Jenny"}
   {:name "Chloe" :sibling "Jenny"}
   {:name "Jenny" :sibling "Chloe"}])

;4 entities, but no relationships
(d/db-with
  (db/empty-db {:name {:db/unique :db.unique/identity}
                :child {:db/cardinality :db.cardinality/many}})
  [{:name "Mark" :spouse "Becky" :child "Chloe"}
   {:name "Becky" :spouse "Mark" :child "Chloe"}
   {:name "Mark" :spouse "Becky" :child "Jenny"}
   {:name "Becky" :spouse "Mark" :child "Jenny"}
   {:name "Chloe" :sibling "Jenny"}
   {:name "Jenny" :sibling "Chloe"}])

;Full on schema
(let [db (d/db-with
           (db/empty-db {:name    {:db/unique :db.unique/identity}
                         :spouse  {:db/cardinality :db.cardinality/one
                                   :db/valueType   :db.type/ref}
                         :child   {:db/cardinality :db.cardinality/many
                                   :db/valueType   :db.type/ref}
                         :sibling {:db/cardinality :db.cardinality/many
                                   :db/valueType   :db.type/ref}
                         ;:db.unique/value is for identity attributes
                         :gov-id {:db/unique :db.unique/value}})
           [{:name "Mark" :gov-id 123}
            {:name "Becky" :gov-id 987}
            {:name "Chloe" :gov-id 231}
            {:name "Jenny" :gov-id 986}
            {:name "Mark" :spouse {:name "Becky"} :child {:name "Chloe"}}
            {:name "Becky" :spouse {:name "Mark"} :child {:name "Chloe"}}
            {:name "Mark" :spouse {:name "Becky"} :child {:name "Jenny"}}
            {:name "Becky" :spouse {:name "Mark"} :child {:name "Jenny"}}
            {:name "Chloe" :sibling {:name "Jenny"}}
            {:name "Jenny" :sibling {:name "Chloe"}}])]
  (d/q
    '[:find ?name .
      :in $ ?e
      :with
      :where
      [?e :spouse ?n]
      [?n :name ?name]]
    db [:name "Becky"])
  (d/pull db '[*] [:name "Mark"])
  (d/pull db '[:name :gov-id {:spouse 1} {:child 1}] [:gov-id 987]))
