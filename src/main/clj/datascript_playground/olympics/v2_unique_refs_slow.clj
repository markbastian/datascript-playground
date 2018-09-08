(ns datascript-playground.olympics.v2-unique-refs-slow
  (:require [datascript.core :as d]
            [clojure.set :refer [intersection]]
            [datascript-playground.olympics.core :refer [noc-regions athletes]]
            [datascript-playground.olympics.v1_refs :refer [athlete no-athlete-db] :as o]))

(defn extant [db {:keys [id games event]}]
  (let [a (:athlete/_id (d/entity db [:person/id id]))
        b (:athlete/_games (d/entity db [:games/name games]))
        c (:athlete/_event (d/entity db [:event/name event]))]
    (and (first a) (first b) (first c) (first (intersection a b c)))))

(defn new-athlete [db m]
  (cond-> [] (not (extant db m)) (conj (athlete m))))

(defn create-olympic-db-with-individual-calls []
  (d/db-with
    no-athlete-db
    (map (fn [m] [:db.fn/call new-athlete m]) (take 50000 athletes))))

(defn create-olympic-db-with-no-calls []
  (d/db-with no-athlete-db (map athlete (take 50000 athletes))))

(time (create-olympic-db-with-individual-calls))
(time (create-olympic-db-with-no-calls))

(count o/olympic-db)

(count
  (d/db-with
    o/olympic-db
    (map (fn [m] [:db.fn/call new-athlete m]) (take 5 athletes))))
