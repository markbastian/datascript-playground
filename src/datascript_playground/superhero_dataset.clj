(ns datascript-playground.superhero-dataset
  (:require [clojure-csv.core :as csv]
            [clojure.java.io :as io]
            [clojure.string :as cs]
            [clojure.edn :as edn]
            [clojure.set :refer [rename-keys]]
            [datascript.db :as db]
            [datascript.core :as d]))

;https://www.kaggle.com/claudiodavi/superhero-set

(def schema
  {:name       {:db/unique :db.unique/identity}
   :alignments {:db/unique :db.unique/identity}
   :genders    {:db/unique :db.unique/identity}
   :colors     {:db/unique :db.unique/identity}
   :hero/id    {:db/unique :db.unique/identity}
   :power      {:db/unique :db.unique/identity}

   :gender     {:db/valueType :db.type/ref}
   :eye-color  {:db/valueType :db.type/ref}
   :hair-color {:db/valueType :db.type/ref}
   :skin-color {:db/valueType :db.type/ref}
   :publisher  {:db/valueType :db.type/ref}
   :alignment  {:db/valueType :db.type/ref}
   :powers     {:db/valueType   :db.type/ref
                :db/cardinality :db.cardinality/many}})

(defn kwize [s]
  (-> s cs/lower-case (cs/replace #"[-\s_]+" "-") keyword))

(def hero-info
  (let [[[_ & h] & r] (-> "datascript_playground/heroes_information.csv" io/resource slurp csv/parse-csv)
        cols (map kwize h)]
    (->> r
         (map (fn [row] (->> (rest row) (map vector cols) (remove (fn [[_ v]] (re-matches #"-\d*(?:\.\d*)?" v))))))
         (map (fn [v] (apply conj {} v)))
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

(defn normalize-hero-info [{:keys [name gender eye-color race hair-color skin-color height publisher alignment weight]}]
  (cond-> {:name name}
          (seq publisher) (assoc :publisher {:id-str publisher})
          height (assoc :height height)
          weight (assoc :weight weight)
          alignment (assoc :alignment {:alignments alignment})
          gender (assoc :gender {:genders gender})
          race (assoc :race {:id-str race})
          hair-color (assoc :hair-color {:colors hair-color})
          eye-color (assoc :eye-color {:colors eye-color})
          skin-color (assoc :skin-color {:colors skin-color})))

(defn normalize-hero-powers [{:keys [name] :as m}]
  {:name   name
   :powers (mapv (fn [[p]] {:power p}) (filter second (dissoc m :name)))})

(def hero-db
  (-> (db/empty-db schema)
      (d/db-with (map normalize-hero-info hero-info))
      (d/db-with (map normalize-hero-powers hero-powers))))

(count hero-db)

(d/pull hero-db '[*] [:name "Batman"])

(->> [:colors :blue]
     (d/entity hero-db)
     :_eye-color
     (map (comp :id-str :name)))

(d/q
  '[:find [?name ...]
    :in $ ?power ?alignment
    :where
    [?e :powers ?power]
    [?e :alignment ?alignment]
    [?e :name ?name]]
  hero-db
  [:power :intelligence]
  [:alignments :bad])

;Same powers
(d/q
  '[:find ?n ?p
    :in $ ?e
    :where
    [?e :powers ?power]
    [?o :powers ?power]
    [?o :name ?n]
    [?power :power ?p]]
  hero-db
  [:name "Yoda"])

(->> [:name "Yoda"]
     (d/entity hero-db)
     :powers
     (mapcat :_powers)
     (map :name)
     count)

(->> [:name "Yoda"]
     (d/entity hero-db)
     :powers
     (map :power))

(d/pull hero-db '[{:powers [:power {:_powers [:name]}]}] [:name "Yoda"])

;var dbfn = function(db, e, n, a) {
;                                  return ;
;                                  }
;var db = d.db_with(d.empty_db(), [[":db.fn/call", dbfn, 1, "Ilya", 44]]);

;https://github.com/tonsky/datascript/blob/master/test/js/tests.js
(defn x [db e n a] [[:db/add e :name n],
                    [:db/add e :age a]])

(d/db-with
  (db/empty-db)
  [[:db.fn/call x 1 "a" 3]])

;(d/q
;  '[:find ?a ?va ?vb
;    :in $ ?s
;    :where
;    [?e :name ?s]
;    [?e ?a ?va]
;    [?x :name ?s]
;    [?x ?a ?vb]
;    [(not= ?va ?vb)]]
;  hero-db [:id-str "Batman"])
;
;(->> [:id-str "Batman"]
;     (d/entity hero-db)
;     :_name
;     (map #(into {} %))
;     ;:_eye-color
;     ;(map (comp :id-str :name))
;     )

