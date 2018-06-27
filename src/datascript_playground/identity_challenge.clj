(ns datascript-playground.identity-challenge
  (:require [datascript.db :as db]
            [datascript.core :as d]
            [clojure.set :refer [intersection]]))

(def schema
  {
   ;Common indexed attributes that are often 'semi-unique'
   :common/title       {:db/unique :db.unique/identity}
   :common/year        {:db/unique :db.unique/identity}
   :common/name        {:db/unique :db.unique/identity}

   ;An entity type with no 'inherent' uid
   :movie/title        {:db/valueType   :db.type/ref
                        :db/cardinality :db.cardinality/one}
   :movie/release-year {:db/valueType   :db.type/ref
                        :db/cardinality :db.cardinality/many
                        :db/doc         "Note that you can re-release a movie"}
   :movie/actors       {:db/valueType   :db.type/ref
                        :db/cardinality :db.cardinality/many}

   ;An entity type with no 'inherent' uid
   :book/title         {:db/valueType   :db.type/ref
                        :db/cardinality :db.cardinality/one}
   :book/release-year  {:db/valueType   :db.type/ref
                        :db/cardinality :db.cardinality/one}
   :book/authors       {:db/valueType   :db.type/ref
                        :db/cardinality :db.cardinality/many}})

;Note that length is not something you'd ref to and it would not be used to establish identity.
(def data
  [{:movie/title        {:common/title "Ben-Hur"}
    :movie/release-year {:common/year 1959}
    :movie/actors       [{:common/name "Charlton Heston"}
                         {:common/name "Stephen Boyd"}]
    :movie/length       222}
   {:movie/title        {:common/title "Ben-Hur"}
    :movie/release-year {:common/year 2016}
    :movie/actors       [{:common/name "Jack Huston"}]
    :movie/length       124}
   {:book/title        {:common/title "Ben-Hur"}
    :book/release-year {:common/year 1880}
    :book/authors      [{:common/name "Lew Wallace"}]
    :book/length       442}
   {:movie/title        {:common/title "The Omega Man"}
    :movie/release-year {:common/year 1971}
    :movie/actors       [{:common/name "Charlton Heston"}]
    :movie/length       98}
   {:movie/title        {:common/title "Ghostbusters"}
    :movie/release-year {:common/year 1984}
    :movie/actors       [{:common/name "Bill Murray"}
                         {:common/name "Dan Aykroyd"}
                         {:common/name "Sigourney Weaver"}]
    :movie/length       105}
   {:movie/title        {:common/title "Ghostbusters"}
    :movie/release-year {:common/year 2016}
    :movie/actors       [{:common/name "Melissa McCarthy"}
                         {:common/name "Kristen Wiig"}
                         {:common/name "Kate McKinnon"}]
    :movie/length       116}])

(def media-db (d/db-with (db/empty-db schema) data))

(count media-db)

;Despite there being no index on movie or book, I can still get exactly what I want....
(->> [:common/name "Charlton Heston"]
     (d/entity media-db)
     :movie/_actors
     (into {}))

(d/pull media-db '[{:movie/_actors [:movie/title]}] [:common/name "Charlton Heston"])

(d/pull media-db '[{:movie/_title [:movie/title :movie/release-year]}] [:common/title "Ben-Hur"])

;Find actors in the 'classic' Ben-Hur
(d/q
  '[:find ?e ?name
    :in $ ?title ?year
    :where
    [?e :movie/title ?title]
    [?e :movie/release-year ?year]
    [?e :movie/actors ?actors]
    [?actors :common/name ?name]]
  media-db
  ;Note that we often think of movies, books, etc. this way "The version of X that came out in Y"
  ;We do not think in terms of ISBN or Dewey Decimal
  [:common/title "Ben-Hur"]
  [:common/year 1959])

;The one and only one challenge with this scheme is the lack of identity for entities that are truly
;unique yet are indirectly referenceable. For example, the following insert should not change the db.
;Solutions:
; * Add an index - This may be unstable.
; * Use a db function to check for containment before insertion
(=
  (count media-db)
  (count (d/db-with media-db data)))

;Note that I can still add the same identity values without making changes
(=
  media-db
  (d/db-with
    media-db
    [{:common/title "Ben-Hur"}
     {:common/year 1959}
     {:common/name "Jack Huston"}]))

(defn guard [db {:keys [movie/title movie/release-year] :as movie}]
  (when-not
    (d/q
      '[:find ?e .
        :in $ ?title ?release-year
        :where
        [?e :movie/title ?title]
        [?e :movie/release-year ?release-year]]
      db (cond-> title (map? title) first) (cond-> release-year (map? release-year) first))
    [movie]))

;(defn guard [db {:keys [movie/title movie/release-year] :as movie}]
;  (when-not
;    (d/q
;      '[:find ?e .
;        :in $ ?title ?release-year
;        :where
;        [?t :common/name ?title]
;        [?y :common/year ?release-year]
;        [?e :movie/title ?t]
;        [?e :movie/release-year ?y]]
;      db
;      (second (cond-> title (map? title) first))
;      (second (cond-> release-year (map? release-year) first)))
;    [movie]))

;Does NOT insert anything
(assert
  (= media-db
     (d/db-with
       media-db
       [[:db.fn/call guard {:movie/title        {:common/title "Ben-Hur"}
                            :movie/release-year {:common/year 1959}
                            :movie/actors       [{:common/name "Charlton Heston"}
                                                 {:common/name "Stephen Boyd"}]
                            :movie/length       222}]])))

;Inserts a new movie entity and title entity
(assert
  (not= media-db
        (d/db-with
          media-db
          [[:db.fn/call guard {:movie/title        {:common/title "Ben-Hurt"}
                               :movie/release-year {:common/year 1959}
                               :movie/actors       [{:common/name "Charlton Heston"}
                                                    {:common/name "Stephen Boyd"}]
                               :movie/length       222}]])))

;;Throws exception
;(d/db-with
;  media-db
;  [[:db.fn/call guard {:movie/title {:common/title "Ben-Hur"}}]])

(seq
  (intersection
  (->> [:common/title "Ben-Hur"] (d/entity media-db) :movie/_title)
  (->> [:common/year 1959] (d/entity media-db) :movie/_release-year)))