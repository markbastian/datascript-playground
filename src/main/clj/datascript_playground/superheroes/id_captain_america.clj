(ns datascript-playground.superheroes.id-captain-america
  (:require [datascript.db :as db]
            [datascript.core :as d]))

(def schema
  {;Common indexed attributes that are often 'semi-unique'
   :common/title       {:db/unique :db.unique/identity}
   :common/name        {:db/unique :db.unique/identity}

   ;An entity type with no 'inherent' uid
   :movie/title        {:db/valueType   :db.type/ref
                        :db/cardinality :db.cardinality/one}
   :movie/release-year {:db/index       true}
   :movie/actors       {:db/valueType   :db.type/ref
                        :db/cardinality :db.cardinality/many}
   :movie/characters   {:db/valueType   :db.type/ref
                        :db/cardinality :db.cardinality/many}})

(def data
  [{:movie/title        {:common/title "Captain America"}
    :movie/release-year 1944
    :movie/actors       [{:common/name "Dick Purcell"}
                         {:common/name "Lorna Gray"}]}
   {:movie/title        {:common/title "Captain America"}
    :movie/release-year 1990
    :movie/actors       [{:common/name "Matt Salinger"}
                         {:common/name "Ronny Cox"}]}
   {:movie/title        {:common/title "Captain America"}
    :movie/release-year 2011
    :movie/actors       [{:common/name "Chris Evans"}
                         {:common/name "Haley Atwell"}
                         {:common/name "Hugo Weaving"}]}])

(def captain-america-db (d/db-with (db/empty-db schema) data))

(d/q
  '[:find ?year .
    :in $ ?title ?actor
    :where
    [?e :movie/title ?title]
    [?e :movie/actors ?actor]
    [?e :movie/release-year ?year]]
  captain-america-db
  [:common/title "Captain America"]
  [:common/name "Chris Evans"])