(ns datascript-playground.superheroes.spider-man-datomic
  (:require [datomic.api :as d]))

(def schema
  [{:db/id "datomic.tx" :db/txInstant #inst "1990-01-01"}
   {:db/ident       :name
    :db/valueType   :db.type/string
    :db/unique      :db.unique/identity
    :db/cardinality :db.cardinality/one}

   {:db/ident       :gender
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}

   {:db/ident       :status
    :db/valueType   :db.type/keyword
    :db/cardinality :db.cardinality/one}

   {:db/ident       :alias
    :db/valueType   :db.type/string
    :db/unique      :db.unique/value
    :db/cardinality :db.cardinality/many}

   {:db/ident       :spouse
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}

   {:db/ident       :child
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/many}

   {:db/ident       :girlfriend
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}])

(def initial-data
  [{:db/id "datomic.tx" :db/txInstant #inst "2000-01-01"}
   {:name   "Peter Parker"
    :gender "M"
    :status :dweeb}
   {:name "Richard Parker" :gender "M" :spouse {:name "Mary Parker"}}
   {:name "Mary Parker" :gender "F" :spouse {:name "Richard Parker"}}
   {:name "Ben Parker" :gender "M" :spouse {:name "May Parker"}}
   {:name "May Parker" :gender "F" :spouse {:name "Ben Parker"}}
   {:name "Richard Parker" :child {:name "Peter Parker"}}
   {:child {:name "Peter Parker"}}
   {:child [{:name "Ben Parker"} {:name "Richard Parker"}]}])

(def spider-bite-data
  [{:db/id "datomic.tx" :db/txInstant #inst "2001-01-01"}
   {:name   "Peter Parker"
    :status :bitten}])

(def hero-moment-data
  [{:db/id "datomic.tx" :db/txInstant #inst "2001-01-05"}
   {:name   "Peter Parker"
    :gender "M"
    :status :spider-man
    :alias  ["Spider-Man" "Spidey"]}
   {:name   "Ben Parker"
    :status :deceased}])

(def girlfriend-1-data
  [{:db/id "datomic.tx" :db/txInstant #inst "2001-01-11"}
   {:name       "Peter Parker"
    :girlfriend {:name "Gwen Stacey"}}])

(def girlfriend-2-data
  [{:db/id "datomic.tx" :db/txInstant #inst "2002-01-01"}
   {:name       "Peter Parker"
    :girlfriend {:name "Mary Jane Watson" :alias "MJ Watson"}}])

(d/delete-database "datomic:mem://parker")
(d/create-database "datomic:mem://parker")

(def conn (d/connect "datomic:mem://parker"))

@(d/transact conn schema)
@(d/transact conn initial-data)
@(d/transact conn spider-bite-data)
@(d/transact conn hero-moment-data)
@(d/transact conn girlfriend-1-data)
@(d/transact conn girlfriend-2-data)

(d/pull (d/db conn) '[{:girlfriend [*]}] [:name "Peter Parker"])

(def gf-query
  '[:find [?gf-name ...]
    :where
    [?e :name "Peter Parker"]
    [?e :girlfriend ?gf]
    [?gf :name ?gf-name]])

;Current girlfriend
(d/q
  gf-query
  (d/db conn))

;All the girlfriends
(d/q
  gf-query
  (d/history (d/db conn)))

;Girlfriend before the bite
(d/q
  gf-query
  (d/as-of (d/db conn) #inst "2000-01-01"))

;Girlfriend before MJ
(d/q
  gf-query
  (d/as-of (d/db conn) #inst "2001-05-01"))

;Look at the stutus history
(def status-query
  '[:find ?status ?time
    :where
    [?e :name "Peter Parker"]
    [?e :status ?status ?t true]
    [?t :db/txInstant ?time]])

;A basic query
(d/q status-query (d/db conn))

(let [current-db (d/db conn)
      full-history-db (d/history current-db)
      snapshot-db (d/as-of current-db #inst "2001-01-02")
      history-at-t-db (d/history snapshot-db)
      f (fn [db] (vec (sort-by second (d/q status-query db))))]
  {:current-status (f current-db)
   :status-before-ben-dies (f snapshot-db)
   :full-history-of-status (f full-history-db)
   :history-until-ben-dies (f history-at-t-db)})

