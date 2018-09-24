(ns datascript-playground.superheroes.spider-man-h2
  (:require [clojure.java.jdbc :as j]))

(def people [{:id 1 :name "Peter Parker" :gender "M"}
             {:id 2 :name "Richard Parker" :gender "M"}
             {:id 3 :name "Mary Parker" :gender "F"}
             {:id 4 :name "Ben Parker" :gender "M"}
             {:id 5 :name "May Parker" :gender "F"}
             {:id 6 :name "Grandpa Parker" :gender "M"}])

(def people-schema
  [[:id "INT"]
   [:name "varchar(MAX)"]
   [:gender "varchar(1)"]])

(def marriages [{:id 1 :personID 2 :spouseID 3}
                {:id 2 :personID 3 :spouseID 2}
                {:id 3 :personID 4 :spouseID 5}
                {:id 4 :personID 5 :spouseID 4}])

(def marriages-schema
  [[:id "INT"]
   [:personID "INT"]
   [:spouseID "INT"]])

(def aliases [{:id 1 :personID 1 :alias "Spider-Man"}
              {:id 2 :personID 1 :alias "Spidey"}])

(def aliases-schema
  [[:id "INT"]
   [:personID "INT"]
   [:alias "varchar(MAX)"]])

(def children [{:id 1 :parentID 2 :childID 1}
               {:id 2 :parentID 3 :childID 1}
               {:id 3 :parentID 6 :childID 2}
               {:id 4 :parentID 6 :childID 4}])

(def children-schema
  [[:id "INT"]
   [:parentID "INT"]
   [:childID "INT"]])

(def db-spec
  {:DATABASE_TO_UPPER false
   :classname         "org.h2.Driver"
   :subprotocol       "h2:mem"
   :subname           "parker;"})

(let [{:keys [connection] :as db} {:connection (j/get-connection db-spec)}]
  (try
    (j/db-do-commands db (j/create-table-ddl :people people-schema))
    (j/db-do-commands db (j/create-table-ddl :marriages marriages-schema))
    (j/db-do-commands db (j/create-table-ddl :aliases aliases-schema))
    (j/db-do-commands db (j/create-table-ddl :children children-schema))
    (j/insert-multi! db :people people)
    (j/insert-multi! db :marriages marriages)
    (j/insert-multi! db :aliases aliases)
    (j/insert-multi! db :children children)
    (j/query db "SELECT * FROM PEOPLE")
    (finally (.close connection))))