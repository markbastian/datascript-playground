(ns datascript-playground.time-as-value
  (:require [datascript.db :as db]
            [datascript.core :as d]))

(def schema
  {:name/string {:db/unique :db.unique/identity}
   :date/string {:db/unique :db.unique/identity}

   :person/name {:db/valueType :db.type/ref}

   :sale/date {:db/valueType :db.type/ref}
   :sale/person {:db/valueType :db.type/ref}
   :sale/customer {:db/valueType :db.type/ref}})

(def test-db
  (-> (db/empty-db schema)
      (d/db-with [{:sale/amount 100.0
                   :sale/date {:date/string "2018-01-01"}
                   :sale/person {:person/name {:name/string "Kevin"}}
                   :sale/customer {:person/name {:name/string "Sam"}}}

                  {:sale/amount 34.0
                   :sale/date {:date/string "2018-01-05"}
                   :sale/person {:person/name {:name/string "Kevin"}}
                   :sale/customer {:person/name {:name/string "Sue"}}}

                  {:sale/amount 200.2
                   :sale/date {:date/string "2018-01-07"}
                   :sale/person {:person/name {:name/string "Kevin"}}
                   :sale/customer {:person/name {:name/string "Bob"}}}

                  {:sale/amount 321.56
                   :sale/date {:date/string "2018-01-21"}
                   :sale/person {:person/name {:name/string "Kevin"}}
                   :sale/customer {:person/name {:name/string "Jane"}}}])
      ))

(->> [:date/string "2018-01-01"]
     (d/entity test-db)
     :sale/_date
     (map d/touch))