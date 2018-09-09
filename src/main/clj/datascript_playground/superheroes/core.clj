(ns datascript-playground.superheroes.core
  (:require [clojure.string :as cs]
            [clojure.java.io :as io]
            [clojure-csv.core :as csv]
            [clojure.edn :as edn]
            [clojure.set :refer [rename-keys]]
            [datascript.core :as d]
            [clj-memory-meter.core :as mm]))

;https://www.kaggle.com/claudiodavi/superhero-set

(defn kwize [s]
  (-> s cs/lower-case (cs/replace #"[-\s_]+" "-") keyword))

(def hero-info
  (let [[[_ & h] & r] (-> "datascript_playground/superheroes/heroes_information.csv" io/resource slurp csv/parse-csv)
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
  (let [[h & r] (-> "datascript_playground/superheroes/super_hero_powers.csv" io/resource slurp csv/parse-csv)
        cols (map kwize h)]
    (map
      (fn [row]
        (-> (zipmap cols (map #({"True" true "False" false} % %) row))
            (rename-keys {:hero-names :name})))
      r)))

;https://www.kaggle.com/stefanocoretta/yoda-speech-corpus/version/1#
(defn normalize-names [s]
  (-> s
      (cs/replace #"\t.*" "")
      (cs/replace #"\s*-\s*" "-")
      (cs/replace #"l" "I")
      (cs/split #"\s+")
      (->> (map cs/capitalize)
           (cs/join " "))))

(def yoda-quotes
  (let [[h & r] (-> "datascript_playground/superheroes/yoda-corpus.csv" io/resource slurp csv/parse-csv)
        cols (map kwize h)]
    (->> r
         (map
           (fn [row]
             (-> (zipmap cols row)
                 (update :character normalize-names)
                 (update :movie edn/read-string)
                 (update :scene edn/read-string)
                 (update :line edn/read-string))))
         (remove (comp cs/blank? :character)))))


(defn stats [db]
  {:memory-size  (mm/measure db)
   :count-datoms (count db)
   :count-eavt   (count (d/datoms db :eavt))
   :count-aevt   (count (d/datoms db :aevt))
   :count-avet   (count (d/datoms db :avet))})
