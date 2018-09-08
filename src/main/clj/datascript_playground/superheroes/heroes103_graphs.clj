(ns datascript-playground.superheroes.heroes103-graphs
  (:require [datascript-playground.superheroes.core :as shc]
            [datascript.core :as d]
            [datascript.db :as db]))

(defn normalize-hero-info [{:keys [name gender eye-color race hair-color skin-color height publisher alignment weight]}]
  (cond-> {:hero/name name}
          (seq publisher) (assoc :hero/publisher {:publisher/name publisher})
          height (assoc :hero/height height)
          weight (assoc :hero/weight weight)
          alignment (assoc :hero/alignment alignment)
          gender (assoc :hero/gender gender)
          race (assoc :hero/race {:race/name race})
          hair-color (assoc :hair-color hair-color)
          eye-color (assoc :eye-color eye-color)
          skin-color (assoc :skin-color skin-color)))

(defn normalize-hero-powers [{:keys [name] :as m}]
  {:hero/name   name
   :hero/powers (mapv (fn [[p]] {:power/name p}) (filter second (dissoc m :name)))})

(def hero-db1
  (-> (db/empty-db {:power/name     {:db/unique :db.unique/identity}
                    :publisher/name {:db/unique :db.unique/identity}
                    :race/name      {:db/unique :db.unique/identity}

                    :hero/name      {:db/unique :db.unique/identity}
                    :hero/powers    {:db/valueType   :db.type/ref
                                     :db/cardinality :db.cardinality/many}
                    :hero/publisher {:db/valueType   :db.type/ref
                                     :db/cardinality :db.cardinality/one}
                    ;Lots of duplication
                    ;:hero/race      {:db/index true}
                    :hero/race      {:db/valueType   :db.type/ref
                                     :db/cardinality :db.cardinality/one}
                    })
      (d/db-with (map normalize-hero-powers shc/hero-powers))
      (d/db-with (map normalize-hero-info shc/hero-info))))

(d/pull hero-db1 '[* {:hero/powers [*]}] [:hero/name "Yoda"])

(count (d/datoms hero-db1 :avet))
