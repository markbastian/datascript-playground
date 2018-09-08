(ns datascript-playground.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as reagent :refer [atom]]
            [datascript.db :as db]
            [datascript.core :as d]
            [cljs.pprint :refer [pprint]]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

(defonce dsdb (d/create-conn {:name {:db/unique :db.unique/identity}}))

(d/transact-async
  dsdb
  [{:name "Mark" :age 44}
   {:name "Mike" :age 21}
   {:name "Mack" :age 54}])

(defn entities [v]
  (d/q
  '[:find ?e ?a
    :in $ ?v
    :where
    [?e ?a ?v]]
  @dsdb v))

(defn render-datoms [db]
  (into
    [:table.table.table-dark
     [:thead [:tr [:td "E"] [:td "A"] [:td "V"] [:td "T"]]]
     [:tbody
      (doall (for [[e a v t :as datom] db]
               ^{:key [e a v t]}
               [:tr (for [c datom] ^{:key [c e a v t]} [:td c])]))]]))

;https://github.com/reagent-project/reagent/blob/master/doc/CreatingReagentComponents.md
(defn render [state]
  (let [w 400 h 200]
    [:div
     [:h2 "Datascript Hypergraph"]
     [:svg {:width w :height h}
      (doall
        (for [i (range 0 360 30)]
          ^{:key i} [:line {:x0        0
                            :y0        0
                            :x1        100
                            :y1        0
                            :transform (str "translate(" (* w 0.5) "," (* h 0.5) ") rotate(" i ")")
                            :style     {:stroke :red :stroke-width 2.3}
                            }]))
      [:circle
       {:r 20
        :cx (* w 0.5)
        :cy (* h 0.5)
        :fill :yellow
        :stroke :black
        :onClick   (fn [event] (prn "feafes"))}]
      [:foreignObject {:x (- (* 0.5 w) 75) :y (- (* 0.5 h) 13)}
       [:input {:type     :text
                :onChange (fn [event] (prn (.-text event)))
                :onblur   (fn [event] (prn "event"))
                :oninput  (fn [event] (prn "event"))}]]]
     [render-datoms @dsdb]]))

(let [state (atom {})]
  (reagent/render-component
    [render state]
    (. js/document (getElementById "app"))))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

