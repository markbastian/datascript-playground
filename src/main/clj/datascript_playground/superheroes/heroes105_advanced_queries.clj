(ns datascript-playground.superheroes.heroes105-advanced-queries
  (:require [datascript-playground.superheroes.heroes102-refs-and-indexes :refer [hero-db]]
            [datascript-playground.superheroes.heroes104-database-functions :refer [yoda-quotes-db]]
            [datascript.core :as d]))

;Find all the yoda quotes by green-skinned heroes
(d/q
  '[:find ?hero-name ?quote
    :in $1 $2 ?color
    :where
    [$1 ?e :hero/skin-color ?color]
    [$1 ?e :hero/name ?hero-name]
    [$2 ?y :yoda-quote/character ?hero-name]
    [$2 ?y :yoda-quote/text ?quote]]
  hero-db
  yoda-quotes-db
  :green)

;Bind in the movie title as well
(d/q
  '[:find ?hero-name ?movie-title ?quote
    :in $1 $2 [[?movie-index ?movie-title]] ?color
    :where
    [$1 ?e :hero/skin-color ?color]
    [$1 ?e :hero/name ?hero-name]
    [$2 ?y :yoda-quote/character ?hero-name]
    [$2 ?y :yoda-quote/movie ?movie-index]
    [$2 ?y :yoda-quote/text ?quote]]
  hero-db
  yoda-quotes-db
  ;Try selectively removing movies...
  [[1 "The Phantom Menace"]
   [2 "Attack of the Clones"]
   [3 "Revenge of the Sith"]
   [4 "A New Hope"]
   [5 "The Empire Strikes Back"]
   [6 "Return of the Jedi"]]
  :green)

(d/q
  '[:find ?hero-name ?quote ?movie-title
    :in $1 $2 [[?movie-index ?movie-title]] ?color ?title
    :where
    [$1 ?e :hero/skin-color ?color]
    [$1 ?e :hero/name ?hero-name]
    [$2 ?y :yoda-quote/character ?hero-name]
    [$2 ?y :yoda-quote/movie ?movie-index]
    [$2 ?y :yoda-quote/text ?quote]
    [(= ?movie-title ?title)]
    [(clojure.string/includes? ?quote "do")]]
  hero-db
  yoda-quotes-db
  [[1 "The Phantom Menace"]
   [2 "Attack of the Clones"]
   [3 "Revenge of the Sith"]
   [4 "A New Hope"]
   [5 "The Empire Strikes Back"]
   [6 "Return of the Jedi"]]
  :green
  "Return of the Jedi")