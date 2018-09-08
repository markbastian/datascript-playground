(ns datascript-playground.olympics.core
  (:require [clojure.string :as cs]
            [clojure-csv.core :as csv]
            [clojure.java.io :as io]
            [clojure.edn :as edn]))

;https://www.kaggle.com/heesoo37/120-years-of-olympic-history-athletes-and-results
(defn normalize [m]
  (let [some-val (complement #{"" "NA"})
        parse #(cond-> % (re-matches #"\d+" %) edn/read-string)
        add-kv (fn [m [k v]] (cond-> m (some-val v) (assoc k (parse v))))]
    (reduce add-kv {} m)))

(defn read-file [f]
  (let [[h & r] (->> f io/resource slurp csv/parse-csv)]
    (map #(normalize (zipmap (map (comp keyword cs/trim cs/lower-case) h) %)) r)))

(defonce noc-regions (read-file "datascript_playground/olympics/noc_regions.csv"))
(defonce athletes (read-file "datascript_playground/olympics/athlete_events.csv"))
