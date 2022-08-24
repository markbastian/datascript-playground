(ns datascript-playground.fact-stores.facts
  (:require [datascript.core :as ds]
            [datomic.api :as d]))

;; # Datalogs / Fact Stores
;; Consider the challenges of data modeling
;;
;; <img src="batman.jpeg" alt="Batman" width="350">
;;
;; A relational model might have the following tables:
;;
;; - Person - id, name, age, gender, alias
;; - Superhero - heroId [FK to Person], alignment
;; - Superpowers - heroId [FK to Person], power
;; - Weapons - heroId [FK to Person], weaponName
;; - Nemesis - heroId [FK to Person], villainId [FK to Person]
;;
;; This model is already kind of screwed up:
;;
;; - Is _Krypto The Superdog_ a person?
;; - What defines a person?
;; - Are Villains heroes? Is a nemesis the person or the super?
;; - Does Batman actually have any powers?
;; - What defines a hero or a villain?
;;
;; This is the challenge with relational modeling. It's all about defining what
;; something is (putting things in boxes) and formalizing relationships.
;;
;; ## The Other Extreme: Document Stores
;; You can store your data representation as plain old JSON. The primary
;; weakness of this approach is that really don't have many of your important
;; db concepts, such as identity (primary keys) or relations (foreign keys).
;; The only real relations are the paths.

;; ## An alternate approach: Facts and Entities / Entity Modeling
;;
;; fact: a thing that is known or proved to be true.
;;
;; en·ti·ty: a thing with distinct and independent existence.
;;
;; Entity modeling is all about asserting facts about entities. An entity is
;; just an object with a unique identity (usually a db concern). As we'll see,
;; facts are just attributes of an entity in time (implicit or explicit).
;;
;; What's great about entity modeling?
;;
;; - It is easy to reason about entities -- I can trivially describe things.
;; - Schema is only on attributes -- there are no "boxes"
;; - It is easy to convert from entities <-> documents
;;
;; Weaknesses
;;
;; - Establishing identity can be challenging
;;   - What attribute or attributes uniquely identify an entity?
;; - It can become attribute soup

;; Example, this is easy to read, describe, and model
(def dc-entities
  [{:name            "Batman"
    :age             32
    :gender          "M"
    :secret-identity "Bruce Wayne"
    :powers          ["Rich"]
    :weapons         ["Belt" "Kryptonite Spear"]
    :alignment       "Chaotic Good"
    :nemesis         [{:name "Joker"}
                      {:name "Penguin"}]}
   {:name            "Joker"
    :secret-identity "Jack Napier"
    :alignment       "Chaotic Evil"
    :nemesis         [{:name "Batman"}]}])

;; This is just maps, though, and is just a document-based approach without some
;; additional secret sauce. We'll need to do a little massaging to get to
;; entities. However, the only thing that's really missing is a stable id.
;; This could be as simple as each map having an :id attribute. Our engine will
;; take care of this for us, though.

;; ### Getting into the details.../Deriving Datalog
;;
;; fact (alt): A stable value in time
;;
;; Examples of facts:
;;
;; Batman's secret identity is Bruce Wayne
;; The Joker's nemesis is Batman
;;
;; Note that to be truly "factual" we need a time element:
;;
;; On March 30, 1939, Bruce Wayne took on the alias of Batman
;; On April 25, 1940, the Joker became Batman's nemesis
;;
;; We can represent any fact about any entity using a simple 3 or 4 tuple
;; notation (EAV or EAVT):
;;
;; - Entity - An arbitrary, stable id used to represent an entity
;; - Attribute
;; - Value
;; - Time (Note the T is _system_ time, not _event_ time.)
;;
;; Using the above examples of facts (We'll make Batman entity 1 and the Joker
;; entity 2):

;; As 3-Tuples
[1 :name "Batman"]
[1 :secret-identity "Bruce Wayne"]
[2 :name "Joker"]
[2 :nemesis 1]                                              ;Note the entity ref

;; As 4-Tuples
[1 :name "Batman" "March 30, 1939"]
[1 :secret-identity "Bruce Wayne" "March 30, 1939"]
[2 :name "Joker" "April 25, 1940"]
[2 :nemesis 1 "April 25, 1940"]                             ;Note the entity ref

;; Note: T is _system_ time - when the system knew the fact, not necessarily
;; when it became true (Which isn't quite what I show above).

;; The addition of a time field allows us to say when our system knows something
;; is true. This makes our database "temporal" -- Datomic and Datahike support
;; this. XTDB also supports the notion of event time and is "bitemporal" but
;; this is beyond the scope of this presentation.

;; If T is not present the assumption is that you've reached some stable point
;; in time (e.g. "right now this is all true").

;; It's trivial to convert maps to tuple format
(def dc-eav
  (->> dc-entities
       (map-indexed (fn [i e] (mapv (fn [[a v]] [i a v]) e)))
       (apply concat)
       vec))

;; This produces:

[[0 :name "Batman"]
 [0 :age 32]
 [0 :gender "M"]
 [0 :secret-identity "Bruce Wayne"]
 [0 :powers ["Rich"]]
 [0 :weapons ["Belt" "Kryptonite Spear"]]
 [0 :alignment "Chaotic Good"]
 [0 :nemesis [{:name "Joker"} {:name "Penguin"}]]
 [1 :name "Joker"]
 [1 :secret-identity "Jack Napier"]
 [1 :alignment "Chaotic Evil"]
 [1 :nemesis [{:name "Batman"}]]]

;; Note that we aren't quite there, yet. I want weapons, powers, and nemesis to
;; be individual values and I want nemesis values to refer to their entities.

;; It's also easy to go back

(->>
  [[0 :name "Batman"]
   [0 :age 32]
   [0 :gender "M"]
   [0 :secret-identity "Bruce Wayne"]
   [0 :powers ["Rich"]]
   [0 :weapons ["Belt" "Kryptonite Spear"]]
   [0 :alignment "Chaotic Good"]
   [0 :nemesis [{:name "Joker"} {:name "Penguin"}]]
   [1 :name "Joker"]
   [1 :secret-identity "Jack Napier"]
   [1 :alignment "Chaotic Evil"]
   [1 :nemesis [{:name "Batman"}]]]
  (group-by first)
  (map (fn [[k v]]
         (assoc (reduce (fn [m [_ a v]] (assoc m a v)) {} v) :id k))))

;; ### Datoms (the basis of all of the *logs)
;; The above tuples (called "Datoms") form the basis for any of our datalog
;; engines. We can easily see this by transacting some data into a datascript db
;; and viewing the db in a REPL. Note that the details of datom management are
;; handled by the engine. You generally just deal with objects and their
;; corresponding schemas. In fact, you can transact full documents (with
;; nesting) and the engine will do the unpacking for you.

; Do a simple transaction (no schema) and view the datoms
(-> (ds/empty-db)
    (ds/db-with [{:name "Batman" :secret-identity "Bruce Wayne"}]))

(-> (ds/empty-db)
    (ds/db-with dc-entities))

;; However, there are a couple gaps in how we specify attributes
;;
;; - We need to specify identity
;; - We need to specify cardinality
;; - We need to specify relations

;; Example with no identity. Note that there are two "Batman" entities.
(-> (ds/empty-db)
    (ds/db-with (conj
                  dc-entities
                  {:name "Batman"
                   :age  100})))

;; Adding a :db/unique constraint now allows me to talk about an entity
;; without using the entity id.
(-> (ds/empty-db
      {:name {:db/unique :db.unique/identity}})
    (ds/db-with (conj
                  dc-entities
                  ;This becomes an update
                  {:name "Batman" :age 100})))

;; We also want to specify that weapons, powers, and nemesis are attributes with
;; cardinality many rather than storing the collections themselves. This way we
;; can do queries to see who has certain powers, weapons, etc.
(-> (ds/empty-db
      {:name    {:db/unique :db.unique/identity}
       :weapons {:db/cardinality :db.cardinality/many}
       :powers  {:db/cardinality :db.cardinality/many}
       :nemesis {:db/cardinality :db.cardinality/many}})
    (ds/db-with dc-entities))

;; Finally, we want to refer to other entities directly.
(-> (ds/empty-db
      {:name    {:db/unique :db.unique/identity}
       :weapons {:db/cardinality :db.cardinality/many}
       :powers  {:db/cardinality :db.cardinality/many}
       :nemesis {:db/cardinality :db.cardinality/many
                 :db/valueType   :db.type/ref}})
    (ds/db-with dc-entities))

;; Another useful schema element is the tuple type, representing composite keys.
;; You can get a good overview of datascript schemas
;; [here](https://tinyurl.com/2p8spjmh). There are a few other useful
;; attributes, but we've covered the most important ones.
(-> (ds/empty-db
      {:full-name {:db/valueType  :db.type/tuple
                   :db/tupleAttrs [:first-name :last-name]
                   :db/unique     :db.unique/identity}})
    (ds/db-with [{:first-name "Mark"
                  :last-name  "Bastian"}]))

;; You can unpack on the fly. All referenced entity attributes are appropriately
;; grouped.
(def dc-db
  (-> (ds/empty-db
        {:name    {:db/unique :db.unique/identity}
         :weapons {:db/cardinality :db.cardinality/many}
         :powers  {:db/cardinality :db.cardinality/many}
         :nemesis {:db/cardinality :db.cardinality/many
                   :db/valueType   :db.type/ref}})
      (ds/db-with [{:name            "Batman"
                    :age             32
                    :gender          "M"
                    :secret-identity "Bruce Wayne"
                    :powers          ["Rich"]
                    :weapons         ["Belt" "Kryptonite Spear"]
                    :alignment       "Chaotic Good"
                    :nemesis         [{:name            "Joker"
                                       :secret-identity "Jack Napier"
                                       :alignment       "Chaotic Evil"
                                       :nemesis         [{:name "Batman"}]
                                       :weapons         ["Knife"]}
                                      {:name "Penguin"}
                                      {:name    "Riddler"
                                       :weapons ["Wit"]}]}
                   {:name   "Riddler"
                    :powers ["Riddlin'"]}])))

;; Let's make it a little more interesting...
(def interesting-dc-entities
  [{:name            "Batman"
    :age             32
    :gender          "M"
    :secret-identity "Bruce Wayne"
    :powers          ["Rich"]
    :weapons         ["Belt" "Kryptonite Spear"]
    :alignment       "Chaotic Good"
    :teams           ["Justice League"]
    :nemesis         [{:name "Joker"}
                      {:name "Penguin"}
                      {:name "Riddler"}]}
   {:name            "Joker"
    :powers          ["Joking"]
    :secret-identity "Jack Napier"
    :alignment       "Chaotic Evil"
    :nemesis         [{:name "Batman"}]
    :weapons         ["Knife"]}
   {:name   "Penguin"
    :powers ["Swimming"]}
   {:name   "Riddler"
    :powers ["Riddlin'"]}
   {:name    "Aquaman"
    :powers  ["Swimming" "Fish Speaking"]
    :nemesis [{:name "Black Manta"}]
    :teams   ["Justice League"]
    :weapons ["Trident"]}
   {:name    "Black Manta"
    :powers  ["Swimming"]
    :weapons ["Trident"]}
   {:name   "Wonder Woman"
    :teams  ["Justice League"]
    :powers ["Flying"]}
   {:name    "Superman"
    :nemesis [{:name "Zod"}
              {:name "Faora"}]
    :teams   ["Justice League"]
    :powers  ["Flying" "Strength" "X-Ray Vision" "Laser Eyes"]}
   {:name   "Zod"
    :powers ["Flying" "Strength" "X-Ray Vision" "Laser Eyes"]}
   {:name   "Faora"
    :powers ["Flying" "Strength" "X-Ray Vision" "Laser Eyes"]}])

(def dc-schema
  {:name    {:db/unique :db.unique/identity}
   :weapons {:db/cardinality :db.cardinality/many}
   :powers  {:db/cardinality :db.cardinality/many}
   :teams   {:db/cardinality :db.cardinality/many}
   :nemesis {:db/cardinality :db.cardinality/many
             :db/valueType   :db.type/ref}})

(def dc-db
  (-> (ds/empty-db dc-schema)
      (ds/db-with interesting-dc-entities)))

;; Now that we've defined schema, we can also inspect it, including the
;; reverse schema (types -> attributes)
(:schema dc-db)
(:rschema dc-db)

;; We can also see the "covering indexes" of the datoms in the db.
(ds/datoms dc-db :eavt)
(ds/datoms dc-db :aevt)
(ds/datoms dc-db :avet)

;; Other ways of editing the db...
;; # Addition
(ds/db-with
  dc-db
  [[:db/add [:name "Batman"] :favorite-food "Bat Bites"]])

;; # Retraction
;; You can retract facts.
(ds/db-with
  dc-db
  [[:db/retract [:name "Batman"] :nemesis [:name "Joker"]]])

;; You can retract entire entities - Note that the entity and all references to
;; it are gone.
(ds/db-with dc-db [[:db/retractEntity [:name "Joker"]]])

;; # Queries
;; There are _generally_ 3 ways you can query these dbs:
;;
;; - The entity api (Not supported by Datomic Cloud :()
;; - The pull api
;; - Datalog queries (q)

;; ## The Entity API
(-> (ds/entity dc-db 1) :name)

;; Nobody thinks in terms of entity ids (and you don't want to expose your db
;; internals. Instead, use "Lookup Refs," a tuple of [attr val] for any
;; db.unique attribute.
(-> (ds/entity dc-db [:name "Batman"]) :name)

;; The entity API is basically a graph api across all refs
(->> (ds/entity dc-db [:name "Batman"])
     :nemesis
     (map :name))

;; Let's combo this with retraction
(let [db (ds/db-with dc-db [[:db/retract [:name "Batman"] :nemesis [:name "Joker"]]])]
  (->> (ds/entity db [:name "Batman"])
       :nemesis
       (map :name)))

(let [db (ds/db-with dc-db [[:db/retractEntity [:name "Riddler"]]])]
  (->> (ds/entity db [:name "Batman"])
       :nemesis
       (map :name)))

;; You can also do backrefs on any ref attribute (this is stored in the indexes)
(->> (ds/entity dc-db [:name "Batman"])
     :nemesis
     (mapcat :_nemesis)
     distinct
     (map :name))

;; ## The Pull API

;; Get all the attributes
(ds/pull dc-db '[*] [:name "Superman"])

;; Get specific attributes
(ds/pull dc-db '[:teams :powers] [:name "Superman"])

;; Get nested attributes
(ds/pull dc-db '[:teams {:nemesis [:name :powers]}] [:name "Superman"])

;; I personally prefer q to complicated pull queries. There's also some great
;; examples of pull [here](https://tinyurl.com/366a3h9p).

;; The Query API
(ds/q
  '[:find ?e
    :in $ ?name
    :where
    [?e :name ?name]]
  dc-db "Batman")

(ds/q
  '[:find ?nemesis-name ?power
    :in $ ?name
    :where
    [?e :name ?name]
    [?e :nemesis ?nemesis]
    [?nemesis :name ?nemesis-name]
    [?nemesis :powers ?power]]
  dc-db "Batman")

;; Find nemesis pair where both have the same power
(ds/q
  '[:find ?hero-name ?villain-name ?power-name
    :keys hero-name villain-name power-name
    :in $
    :where
    [?hero :name ?hero-name]
    [?hero :powers ?power-name]
    [?hero :nemesis ?villain]
    [?villain :powers ?power-name]
    [?villain :name ?villain-name]]
  dc-db)

;; Now let's switch to a different data set to show the power of some pretty
;; advanced queries.
(def parker-family
  (ds/db-with
    (ds/empty-db {:name   {:db/unique :db.unique/identity}
                  :alias  {:db/unique      :db.unique/identity
                           :db/cardinality :db.cardinality/many}
                  :spouse {:db/cardinality :db.cardinality/one
                           :db/valueType   :db.type/ref}
                  :child  {:db/cardinality :db.cardinality/many
                           :db/valueType   :db.type/ref}})
    [{:name "Peter Parker" :gender "M" :alias ["Spider-Man" "Spidey"]}
     {:name "Richard Parker" :gender "M" :spouse {:name "Mary Parker"}}
     {:name "Mary Parker" :gender "F" :spouse {:name "Richard Parker"}}
     {:name "Ben Parker" :gender "M" :spouse {:name "May Parker"}}
     {:name "May Parker" :gender "F" :spouse {:name "Ben Parker"}}
     {:name "Richard Parker" :child {:name "Peter Parker"}}
     {:name "Mary Parker" :child {:name "Peter Parker"}}
     {:name   "Richard's Dad"
      :child  [{:name "Ben Parker"}
               {:name "Richard Parker"}]
      :gender "M"}
     ;;Uncomment for recursive example
     {:name   "Richard's Granddad"
        :child  [{:name "Richard's Dad"}]
        :gender "M"}
     {:name   "Richard's Mom"
      :child  [{:name "Ben Parker"}
               {:name "Richard Parker"}]
      :gender "F"}]))

;; One thing that is really nice about datalog queries is that they are data, so
;; you can store and reuse them.
(def uncle-query
  '[:find [?uncle-name ...]
    :in $ ?person
    :where
    ; ?person is Peter Parker based on the lookup ref in the input.
    ; Get his parent (this will bind to both Richard and Mary)
    [?parent :child ?person]
    ; For that parent, there exists a ?grandparent entity whose child is ?parent
    [?grandparent :child ?parent]
    ; For that ?grandparent entity bind to all children as ?uncle
    [?grandparent :child ?uncle]
    ; The ?uncle is male
    [?uncle :gender "M"]
    ; The ?uncle is also not Peter's parent.
    [(not= ?parent ?uncle)]
    ; Get the :name attribute as ?uncle-name
    [?uncle :name ?uncle-name]])

;; Who is Peter Parker's uncle?
(ds/q uncle-query parker-family [:name "Peter Parker"])

;; Using recursive rules we can get all of Peter's ancestors
(def rules
  '[[(ancestor ?p ?c)
     [?p :child ?c]]
    [(ancestor ?gp ?gc)
     [?gp :child ?c]
     (ancestor ?c ?gc)]])

(ds/q
  '[:find ?ancestor-name
    :in $ % ?person
    :where
    (ancestor ?a ?person)
    [?a :name ?ancestor-name]]
  parker-family
  rules
  [:name "Peter Parker"])

(def marvel-db
  (-> (ds/empty-db
        {:name    {:db/unique :db.unique/identity}
         :weapons {:db/cardinality :db.cardinality/many}
         :powers  {:db/cardinality :db.cardinality/many}
         :teams   {:db/cardinality :db.cardinality/many}
         :nemesis {:db/cardinality :db.cardinality/many
                   :db/valueType   :db.type/ref}})
      (ds/db-with [{:name            "Wolverine"
                    :secret-identity "Logan"
                    :powers          ["Regeneration"]
                    :weapons         ["Claws"]
                    :alignment       "Chaotic Good"
                    :teams           ["X-Men"]
                    :nemesis         [{:name "Magneto"}
                                      {:name "Sabretooth"}]}
                   {:name            "Storm"
                    :secret-identity "Logan"
                    :powers          ["Flying" "Weather Control"]
                    :alignment       "Lawful Good"
                    :teams           ["X-Men"]
                    :nemesis         [{:name "Magneto"}
                                      {:name "Sabretooth"}]}])))

;; Cross-db queries (Not in datomic cloud)
(ds/q
  '[:find ?dc-name ?marvel-name ?power
    :in $dc $marvel
    :where
    [$dc ?ed :powers ?power]
    [$marvel ?em :powers ?power]
    [$dc ?ed :name ?dc-name]
    [$marvel ?em :name ?marvel-name]]
  dc-db marvel-db)

;; Database functions - Note that this is implementation-dependent
;; The following is relevant for datascript and datahike

(defn increase-age [db hero-names]
  (let [res (ds/q
              '[:find ?e ?age
                :in $ [?name ...]
                :where
                [?e :name ?name]
                [?e :age ?age]]
              db hero-names)]
    (mapv (fn [[e a]] [:db/add e :age (inc a)]) res)))

(-> (ds/empty-db)
    (ds/db-with [{:name "Batman" :age 35}
                 {:name "Superman" :age 40}
                 {:name "Wonderwoman" :age 25}])
    (ds/db-with [[:db.fn/call increase-age ["Batman" "Wonderwoman"]]]))

;; ## Practical Use
;; Define the schema
(def superhero-schema
  {:name    {:db/unique :db.unique/identity}
   :weapons {:db/cardinality :db.cardinality/many}
   :powers  {:db/cardinality :db.cardinality/many}
   :teams   {:db/cardinality :db.cardinality/many}
   :nemesis {:db/cardinality :db.cardinality/many
             :db/valueType   :db.type/ref}})

;; Somewhere define your connection
(def ds-conn (ds/create-conn superhero-schema))

;; Transact the data
;; db-before and db-after are the dsdb pre and post tx
;; tx-data are the datoms that were added or removed [true or false]
;; tempids are any ids that were temporarily created
;; (note that you can provide a negative id for new entities if you want to
;; represent them that way when transacting)
;; tx-meta - transaction metadata - not sure on these detais
(let [tx (ds/transact! ds-conn interesting-dc-entities)
      {:keys [db-before db-after tx-data tempids tx-meta]} tx]
  tx-data)

;; Just @deref the conn when using
(ds/entity @ds-conn [:name "Superman"])

;; # Datomic
;; Datomic is an enterprise-scale datalog implementation. However, Datascript
;; can be used for a lot of production applications. There are two flavors:
;;
;; - Datomic on prem - Uses the peer model. Has all of the above plus time
;; travel.
;; - Datomic cloud - Fully managed, no entity api. No multi-db queries.

;; Datomic, Datahike (History, disk-backed, write limited), and Datalevin
;; (No history, disk-backed, super fast) all use the following schema
;; representation. Datascript has no requirements for schema types aside from
;; constraints you wish to add, as shown above. The other dbs require schemas
;; for every attribute.
;;
;; Note that the `{:db/id "datomic.tx" :db/txInstant #inst "1990-01-01"}` is a
;; way to play back sequential time-oriented data into datomic with known dates.
;; This only works if the times are monotonically ascending.
(def schema
  [{:db/id "datomic.tx" :db/txInstant #inst "1990-01-01"}
   {:db/ident       :name
    :db/valueType   :db.type/string
    :db/unique      :db.unique/identity
    :db/cardinality :db.cardinality/one}

   {:db/ident       :gender
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}

   {:db/ident       :status
    :db/valueType   :db.type/keyword
    :db/cardinality :db.cardinality/one}

   {:db/ident       :alias
    :db/valueType   :db.type/string
    :db/unique      :db.unique/value
    :db/cardinality :db.cardinality/many}

   {:db/ident       :spouse
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}

   {:db/ident       :child
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/many}

   {:db/ident       :girlfriend
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}])

;; Let's identify some factual events from the life of Peter Parker
(def initial-data
  [{:db/id "datomic.tx" :db/txInstant #inst "2000-01-01"}
   {:name   "Peter Parker"
    :gender "M"
    :status :kid}
   {:name "Richard Parker" :gender "M" :spouse {:name "Mary Parker"}}
   {:name "Mary Parker" :gender "F" :spouse {:name "Richard Parker"}}
   {:name "Ben Parker" :gender "M" :spouse {:name "May Parker"}}
   {:name "May Parker" :gender "F" :spouse {:name "Ben Parker"}}
   {:name "Richard Parker" :child {:name "Peter Parker"}}
   {:child {:name "Peter Parker"}}
   {:child [{:name "Ben Parker"} {:name "Richard Parker"}]}])

(def spider-bite-data
  [{:db/id "datomic.tx" :db/txInstant #inst "2001-01-01"}
   {:name   "Peter Parker"
    :status :bitten}])

(def hero-moment-data
  [{:db/id "datomic.tx" :db/txInstant #inst "2001-01-05"}
   {:name   "Peter Parker"
    :status :spider-man
    :alias  ["Spider-Man" "Spidey"]}
   {:name   "Ben Parker"
    :status :deceased}])

(def girlfriend-1-data
  [{:db/id "datomic.tx" :db/txInstant #inst "2001-01-11"}
   {:name       "Peter Parker"
    :girlfriend {:name "Gwen Stacey"}}])

(def girlfriend-2-data
  [{:db/id "datomic.tx" :db/txInstant #inst "2002-01-01"}
   {:name       "Peter Parker"
    :girlfriend {:name "Mary Jane Watson" :alias "MJ Watson"}}])

(d/delete-database "datomic:mem://parker")
(d/create-database "datomic:mem://parker")

(def conn (d/connect "datomic:mem://parker"))
(d/transact conn schema)
(d/transact conn initial-data)
(d/transact conn spider-bite-data)
(d/transact conn hero-moment-data)
(d/transact conn girlfriend-1-data)
(d/transact conn girlfriend-2-data)

;; APIs across the datalog implementations are largely compatible.
;; For example...
(d/q
  uncle-query
  (d/db conn)
  [:name "Peter Parker"])

(d/pull (d/db conn) '[{:girlfriend [*]}] [:name "Peter Parker"])

(def gf-query
  '[:find [?gf-name ...]
    :where
    [?e :name "Peter Parker"]
    [?e :girlfriend ?gf]
    [?gf :name ?gf-name]])

;Current girlfriend
(d/q
  gf-query
  (d/db conn))

;All the girlfriends
(d/q
  gf-query
  (d/history (d/db conn)))

;Girlfriend before the bite
(d/q
  gf-query
  (d/as-of (d/db conn) #inst "2000-01-01"))

;Girlfriend before MJ
(d/q
  gf-query
  (d/as-of (d/db conn) #inst "2001-05-01"))

;Examine the status times
(def status-query
  '[:find ?status ?time
    :where
    [?e :name "Peter Parker"]
    [?e :status ?status ?t true]
    [?t :db/txInstant ?time]])

;A basic status query
(d/q status-query (d/db conn))

(let [current-db (d/db conn)
      full-history-db (d/history current-db)
      snapshot-db (d/as-of current-db #inst "2001-01-02")
      history-at-t-db (d/history snapshot-db)
      f (fn [db] (vec (sort-by second (d/q status-query db))))]
  {:current-status         (f current-db)
   :status-before-ben-dies (f snapshot-db)
   :full-history-of-status (f full-history-db)
   :history-until-ben-dies (f history-at-t-db)})

;; # Conclusion
;; Entity modeling is a powerful way to represent your domain. Simply make
;; assertions about your entity attributes and let the engine do the rest. You
;; will avoid the "fit this in an ontology box" problems of relational dbs and
;; have the same flexible expressiveness as document stores but with all the
;; query power you could want. Depending on your needs for performance,
;; persistence, scalability, and temporality you can choose from Datascript,
;; Datomic, Datahike, Datalevin, or XTDB.



