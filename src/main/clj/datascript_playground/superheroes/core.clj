(ns datascript-playground.superheroes.core
  (:require [clojure.string :as cs]
            [clojure.java.io :as io]
            [clojure-csv.core :as csv]
            [clojure.edn :as edn]
            [clojure.set :refer [rename-keys]]))

;https://www.kaggle.com/claudiodavi/superhero-set

(defn kwize [s]
  (-> s cs/lower-case (cs/replace #"[-\s_]+" "-") keyword))

(def hero-info
  (let [[[_ & h] & r] (-> "datascript_playground/heroes_information.csv" io/resource slurp csv/parse-csv)
        cols (map kwize h)]
    (->> r
         (map (fn [row] (->> (rest row) (map vector cols) (remove (fn [[_ v]] (re-matches #"-\d*(?:\.\d*)?" v))))))
         (map (fn [v] (apply conj {} (remove (comp cs/blank? second) v))))
         (map (fn [{:keys [gender eye-color hair-color skin-color alignment height weight] :as m}]
                (-> m
                    (cond-> gender (update :gender kwize))
                    (cond-> eye-color (update :eye-color kwize))
                    (cond-> hair-color (update :hair-color kwize))
                    (cond-> skin-color (update :skin-color kwize))
                    (cond-> alignment (update :alignment kwize))
                    (cond-> height (update :height edn/read-string))
                    (cond-> weight (update :weight edn/read-string))))))))

(def hero-powers
  (let [[h & r] (-> "datascript_playground/super_hero_powers.csv" io/resource slurp csv/parse-csv)
        cols (map kwize h)]
    (map (fn [row] (-> (zipmap cols (map #({"True" true "False" false} % %) row))
                       (rename-keys {:hero-names :name}))) r)))
