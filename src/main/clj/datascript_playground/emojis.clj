(ns datascript-playground.emojis
  (:require [clojure.string :as cs]
            [hickory.core :as hik]
            [hickory.select :as s]
            [datascript.db :as db]
            [datascript.core :as d]))

;https://unicode.org/Public/emoji/11.0/
;https://unicode.org/Public/emoji/11.0/emoji-data.txt
(defn long->emoji [l] (apply str (Character/toChars l)))

(defn str->emoji [s]
  (->> (-> s (cs/replace #"U\+" "") (cs/split #"\s+"))
       (map #(Long/parseLong % 16))
       (map #(Character/toChars %))
       (reduce into [])
       (apply str)))

(defn normalize [code name]
  (let [kws (->> (if (cs/includes? name ":") #":" #"\s+")
                 (cs/split name)
                 (mapv cs/trim))]
    {:emoji/code     code
     :emoji/name     name
     :emoji/keywords (mapv (fn [kw] {:keyword/string kw}) kws)
     :emoji/emoji    (str->emoji code)}))

(defn create-emoji-data []
  (let [h (->> "full-emoji-list.html" slurp hik/parse hik/as-hickory)]
    (map normalize
         (->> (s/select (s/child (s/tag :tr) (s/class "code")) h)
              (map #(get-in % [:content 0 :content 0])))
         (->> (s/select (s/child (s/tag :tr) (s/class "name")) h)
              (map #(get-in % [:content 0]))))))

(def schema
  {:keyword/string {:db/unique :db.unique/identity}

   :emoji/emoji    {:db/unique :db.unique/identity}
   :emoji/code     {:db/unique :db.unique/value}
   :emoji/name     {:db/unique :db.unique/value}
   :emoji/keywords {:db/valueType   :db.type/ref
                    :db/cardinality :db.cardinality/many}})

(def emoji-db
  (d/db-with
    (db/empty-db schema)
    (create-emoji-data)))

#_
(->> [:keyword/string "sad"]
     (d/entity emoji-db)
     :emoji/_keywords
     (map :emoji/emoji))