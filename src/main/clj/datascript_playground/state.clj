(ns datascript-playground.state
  (:require [datascript.core :as d]
            [datascript-playground.core :as core]
            [clojure.pprint :as pp]))

;;In real life you may want state.
;;d/create-conn is to d/empty-db as atom is to {}.
;;State vs. value
(def conn (d/create-conn {}))

;;Insert with transactions
(d/transact! conn core/sample-data)

;Recap...
;Local value
(def test-db
  (-> (d/empty-db)
      (d/db-with core/sample-data)
      (d/db-with [[:db/add 1 :favorite-food "Pizza"]])))

;vs. transaction
(d/transact! conn [[:db/add 1 :favorite-food "Pizza"]])

;You can listen ala watches
(d/listen!
  conn
  :foo
  (fn [{:keys [db-before db-after tx-data tempids tx-meta]}]
    (let [[o n] tx-data]
      (pp/pprint [{:dropped o}
                  {:added n}]))))

(d/transact! conn [[:db/add 1 :favorite-food "Ham"]])
(d/transact! conn [[:db/add 1 :favorite-food "Cheese"]])
(d/transact! conn [[:db/add 1 :pet "Dog"]])