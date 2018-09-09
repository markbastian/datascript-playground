(ns datascript-playground.superheroes.heroes103-graphs
  (:require [datascript-playground.superheroes.core :as shc]
            [datascript.core :as d]
            [datascript.db :as db]))

;In this situation we're going to go all in on refs to create a graph db.
; When to index, when to ref, when to do nothing...
; * index when the value has no identity but you want to look it up
; * ref when the value has identity.
;   * This is obvious for top level items such as a hero or other "object-like" thing
;     that has a natural collection of namespace qualified keywords.
;   * Publisher, power, etc. could easily be expanded with other attributes such as
;     address, buffs, counters, etc.
;   * What about color? Each unique/id color be expanded with values such as
;     :color/rgb, :color/hsv such that a color is a thing, not just an attribute.
;     The same logic could be applied to dates. Multiple representations, events, etc.
;     could be tied to a date, making it more than just a string or inst.
;   * Another reason to ref would be when you want to share a common discrete set of
;     elements across attributes. Often these elements are, at face value, simple
;     values, but are more complex like what is described in the last bullet.
;     Examples of values to unify across attributes might be dates or colors.
; * Do nothing when the value has no identity and doesn't need a fast lookup.

(defn normalize-hero-info [{:keys [name gender eye-color race hair-color skin-color height publisher alignment weight]}]
  (cond-> {:hero/name name}
          (seq publisher) (assoc :hero/publisher {:publisher/name publisher})
          height (assoc :hero/height height)
          weight (assoc :hero/weight weight)
          alignment (assoc :hero/alignment {:alignment/name alignment})
          gender (assoc :hero/gender gender)
          race (assoc :hero/race {:race/name race})
          hair-color (assoc :hero/hair-color {:color/value hair-color})
          eye-color (assoc :hero/eye-color {:color/value eye-color})
          skin-color (assoc :hero/skin-color {:color/value skin-color})))

(defn normalize-hero-powers [{:keys [name] :as m}]
  {:hero/name   name
   :hero/powers (mapv (fn [[p]] {:power/name p}) (filter second (dissoc m :name)))})

(def hero-db
  (-> (db/empty-db {:power/name      {:db/unique :db.unique/identity}
                    :publisher/name  {:db/unique :db.unique/identity}
                    :race/name       {:db/unique :db.unique/identity}
                    :alignment/name  {:db/unique :db.unique/identity}
                    :color/value     {:db/unique :db.unique/identity}

                    :hero/name       {:db/unique :db.unique/identity}
                    :hero/powers     {:db/valueType   :db.type/ref
                                      :db/cardinality :db.cardinality/many}
                    :hero/publisher  {:db/valueType   :db.type/ref
                                      :db/cardinality :db.cardinality/one}
                    :hero/race       {:db/valueType   :db.type/ref
                                      :db/cardinality :db.cardinality/one}
                    :hero/hair-color {:db/valueType   :db.type/ref
                                      :db/cardinality :db.cardinality/one}
                    :hero/eye-color  {:db/valueType   :db.type/ref
                                      :db/cardinality :db.cardinality/one}
                    :hero/skin-color {:db/valueType   :db.type/ref
                                      :db/cardinality :db.cardinality/one}})
      (d/db-with (map normalize-hero-powers shc/hero-powers))
      (d/db-with (map normalize-hero-info shc/hero-info))))

;Using refs a lot more requires more work when extracting values
(d/pull
  hero-db
  '[*
    {:hero/eye-color [:color/value]}
    {:hero/hair-color [:color/value]}
    {:hero/skin-color [:color/value]}
    {:hero/race [:race/name]}
    {:hero/publisher [:publisher/name]}
    {:hero/powers [:power/name]}]
  [:hero/name "Yoda"])

;Note the here the size of the avet index has grown
{:memory-size  "1009.7 KB"
 :count-datoms 11594
 :count-eavt   11594
 :count-aevt   11594
 :count-avet   9203}
(shc/stats hero-db)

(->> [:race/name "Human"]
     (d/entity hero-db)
     :hero/_race
     count)

;I can now do graph walks with the pull API (powers -> hero)
(d/pull
  hero-db
  '[:hero/name
    {:hero/powers
     [:power/name
      :hero/power
      {:hero/_powers [:hero/name]}]}]
  [:hero/name "Yoda"])

;Find heroes with homogeneous coloring
(d/q
  '[:find ?n ?v
    :in $
    :where
    [?e :hero/eye-color ?c]
    [?e :hero/hair-color ?c]
    [?e :hero/skin-color ?c]
    [?c :color/value ?v]
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
  hero-db [:color/value :green])

;Color attributes
(time
  (d/q
  '[:find ?n ?a ?cv
    :in $ [?cv ...]
    :where
    [?c :color/value ?cv]
    [?e ?a ?c]
    [?e :hero/name ?n]]
  hero-db [:green :red]))