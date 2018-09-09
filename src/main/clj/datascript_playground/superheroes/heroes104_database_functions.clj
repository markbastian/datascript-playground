(ns datascript-playground.superheroes.heroes104-database-functions
  (:require [datascript-playground.superheroes.core :as shc]
            [datascript.core :as d]
            [datascript.db :as db]))

;Database functions allow you to call a function with the current state of the db
;This allows you to do a couple of key things:
; * Ensure identity for elements where there is no natural unique id key
; * Perform on-the-fly normalization of data. This allows you to separate
;   "db normal form" from "source normal form" if desired.
; Note that datascript uses :db.fn/call vs. transactor functions.
; Also, I've found that large transactions in a single datascript function
; seem to be ok where with datomic you want to have many smaller async transactions.

(def yoda-quotes-dbx1
  ;2590 datoms added
  (d/db-with (db/empty-db {}) shc/yoda-quotes))

;No logical concept of identity. What happens? What do we do?
(def yoda-quotes-dbx2
  (-> (db/empty-db {})
      ;2590 datoms added
      (d/db-with shc/yoda-quotes)
      ;2590 datoms added - again!
      (d/db-with shc/yoda-quotes)))

(def id-fn (juxt :movie :scene :line))

(defn extants [db quotes]
  (let [k (map id-fn quotes)
        ids (->>
              (d/q
                '[:find ?m ?s ?l ?e
                  :in $ [[?m ?s ?l]]
                  :where
                  [?e :movie ?m]
                  [?e :scene ?s]
                  [?e :line ?l]]
                db k)
              (reduce (fn [m v] (assoc m (pop v) (peek v))) {}))]
    (->> quotes
         (map (fn [quote] (if-let [id (ids (id-fn quote))]
                            (assoc quote :db/id id)
                            quote)))
         (map #(zipmap
                 (map (comp (partial keyword "yoda-quote") name) (keys %))
                 (vals %))))))

(def yoda-quotes-db
  (-> (db/empty-db {})
      (d/db-with [[:db.fn/call extants shc/yoda-quotes]])
      (d/db-with [[:db.fn/call extants shc/yoda-quotes]])))
