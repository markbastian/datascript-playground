(ns datascript-playground.superheroes.heroes102-refs-and-indexes
  (:require [datascript-playground.superheroes.core :as shc]
            [datascript.core :as d]
            [datascript.db :as db]))

;The normalization functions do some important things:
; * Associate keywords to identify logical domain groupings
; * Group different entities together and establish relationships
(defn normalize-hero-info [{:keys [name gender eye-color race hair-color skin-color height publisher alignment weight]}]
  (cond-> {:hero/name name}
          ;Publishers are entities
          (seq publisher) (assoc :hero/publisher {:publisher/name publisher})
          height (assoc :hero/height height)
          weight (assoc :hero/weight weight)
          alignment (assoc :hero/alignment alignment)
          gender (assoc :hero/gender gender)
          race (assoc :hero/race race)
          hair-color (assoc :hero/hair-color hair-color)
          eye-color (assoc :hero/eye-color eye-color)
          skin-color (assoc :hero/skin-color skin-color)))

(defn normalize-hero-powers [{:keys [name] :as m}]
  {:hero/name   name
   ;Powers are entities
   :hero/powers (->> (filter second (dissoc m :name))
                     (mapv (fn [[p]] {:power/name p})))})

(def hero-db
  (-> (db/empty-db {:power/name     {:db/unique :db.unique/identity}
                    :publisher/name {:db/unique :db.unique/identity}

                    :hero/name      {:db/unique :db.unique/identity}
                    :hero/powers    {:db/valueType   :db.type/ref
                                     :db/cardinality :db.cardinality/many}
                    :hero/publisher {:db/valueType   :db.type/ref
                                     :db/cardinality :db.cardinality/one}
                    :hero/race      {:db/index true}})
      (d/db-with (map normalize-hero-powers shc/hero-powers))
      (d/db-with (map normalize-hero-info shc/hero-info))))

;Downside to refs - results get a little more complicated
(d/pull hero-db
        '[*
          {:hero/powers [:power/name]}
          {:hero/publisher [:publisher/name]}
          ]
        [:hero/name "Yoda"])

;Dramatically smaller due to refs on powers
{:memory-size "972.7 KB"
 :count-datoms 11493
 :count-eavt 11493
 :count-aevt 11493
 :count-avet 7924}
(shc/stats hero-db)

;I can now do graph walks with the pull API (powers -> hero)
(d/pull
  hero-db
  '[:hero/name
    {:hero/powers
     [:power/name
      :hero/power
      {:hero/_powers [:hero/name]}]}]
  [:hero/name "Yoda"])

;Or with the entity API (powers -> hero)
(let [{:keys [hero/powers]} (d/entity hero-db [:hero/name "Yoda"])]
  (reduce
    (fn [m {:keys [:power/name :hero/_powers]}]
      (assoc m name (mapv :hero/name _powers)))
    {} powers))

;Or the query API (hero -> powers)
(->>
  [:hero/name "Yoda"]
  (d/q
  '[:find ?n ?power-name
    :in $ ?e
    :where
    [?e :hero/powers ?power]
    [?h :hero/powers ?power]
    [?h :hero/name ?n]
    [?power :power/name ?power-name]]
  hero-db)
  (reduce (fn [m [k v]] (update m k conj v)) (sorted-map)))

;Find heroes with homogeneous coloring
(d/q
  '[:find ?n ?c
    :in $
    :where
    [?e :hero/eye-color ?c]
    [?e :hero/hair-color ?c]
    [?e :hero/skin-color ?c]
    [?e :hero/name ?n]]
  hero-db)

;Green heroes
(d/q
  '[:find ?n
    :in $ ?c
    :where
    [?e :hero/eye-color ?c]
    [?e :hero/hair-color ?c]
    [?e :hero/skin-color ?c]
    [?e :hero/name ?n]]
  hero-db :green)

;Color attributes
(time
  (d/q
  '[:find ?n ?a ?c
    :in $ [?c ...]
    :where
    [?e ?a ?c]
    [?e :hero/name ?n]]
  hero-db [:green :red]))