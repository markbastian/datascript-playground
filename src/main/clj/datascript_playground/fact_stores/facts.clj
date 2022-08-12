(ns datascript-playground.fact-stores.facts
  (:require [datascript.core :as d]))

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
;; - Are Villains heroes? Is a nemesis the person or the super?
;; - Does Batman actually have any powers?
;; - What defines a hero or a villain?
;;
;; This is the challenge with relational modeling. It's all about defining what
;; something is (putting things in boxes) and formalizing relationships.
;;
;; # Facts and Entities
;; fact: a thing that is known or proved to be true.
;; en·ti·ty: a thing with distinct and independent existence.
;;
;; It is easy to reason about entities -- I can trivially describe things.
;; On the flip side, it isn't always easy to establish identity for entities.
;;
;;

(def schema
  {:name {:db/unique :db.unique/identity}})

(-> (d/empty-db)
    (d/db-with [{:name "Batman" :alias "Bruce Wayne"}]))