(ns datascript-playground.thesaurus
  (:require [clojure.string :as cs]
            [clojure.java.io :as io]
            [datascript.db :as db]
            [datascript.core :as d]))

(defn build-thesaurus []
  (let [r (io/reader "mthesaur.txt")]
    (->> r
         line-seq
         (map #(map cs/trim (cs/split % #",")))
         (mapv (fn [[f & r]] {:thesaurus/word    f
                              :thesaurus/synonym (mapv (fn [w] {:thesaurus/word w}) r)})))))

(def schema
  {:thesaurus/word    {:db/unique :db.unique/identity}
   :thesaurus/synonym {:db/valueType   :db.type/ref
                       :db/cardinality :db.cardinality/many}})

(def thesaurus-db
  (d/db-with
    (db/empty-db schema)
    (build-thesaurus)))