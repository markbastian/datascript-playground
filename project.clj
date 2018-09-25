(defproject datascript-playground "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [datascript "0.16.6"]
                 [clojure-csv/clojure-csv "2.0.2"]
                 [clj-time "0.14.4"]
                 [digest "1.4.8"]
                 [hickory "0.7.1"]
                 [clojure-csv/clojure-csv "2.0.2"]
                 [com.clojure-goes-fast/clj-memory-meter "0.1.2"]
                 ;For comparison
                 [com.datomic/datomic-free "0.9.5697"]
                 [com.google.guava/guava "26.0-jre"]
                 [org.clojure/java.jdbc "0.7.5"]
                 [com.h2database/h2 "1.4.197"]
                 ;Graph stuff
                 ;[helpshift/gulfstream "0.2.1"]
                 ;Clojurescript deps
                 [org.clojure/clojurescript "1.10.339"]
                 [reagent "0.8.1"]]

  :plugins [[lein-figwheel "0.5.16"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  :source-paths ["src/main/clj" "src/main/cljc"]
  :test-paths ["src/test/clojure"]
  :resource-paths ["resources" "src/main/resources"]
  :jar-exclusions [#"\.swp|\.swo|\.DS_Store"]

  :profiles {:uberjar {:aot :all}
             :dev {:dependencies [[cider/piggieback "0.3.9"]
                                  [nrepl "0.4.5"]
                                  [figwheel-sidecar "0.5.16"]]
                   :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}}}

  :cljsbuild {:builds [{:id           "dev"
                        :source-paths ["src/main/cljs" "src/main/cljc"]

                        ;; If no code is to be run, set :figwheel true for continued automagical reloading
                        :figwheel     {:on-jsload "datascript-playground.core/on-js-reload"}

                        :compiler     {:main                 datascript-playground.core
                                       :asset-path           "js/compiled/out"
                                       :output-to            "resources/public/js/compiled/ds.js"
                                       :output-dir           "resources/public/js/compiled/out"
                                       :source-map-timestamp true}}
                       ;; This next build is an compressed minified build for
                       ;; production. You can build this with:
                       ;; lein cljsbuild once min
                       {:id           "min"
                        :source-paths ["src/main/cljs" "src/main/cljc"]
                        :compiler     {:output-to     "resources/public/js/compiled/ds.js"
                                       :main          datascript-playground.core
                                       :optimizations :advanced
                                       :pretty-print  false}}]}

  :figwheel {:css-dirs ["resources/public/css"]})
