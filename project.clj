(defproject
  test-commute
  "0.1.0-SNAPSHOT"
  :description
  "FIXME: write description"
  :ring {:handler test-commute.handler/app,
         :init test-commute.handler/init,
         :destroy test-commute.handler/destroy}
  :cljsbuild
  {:builds
   [{:source-paths ["src-cljs"],
     :id "dev",
     :compiler
     {:output-dir "resources/public/js/",
      :optimizations :none,
      :output-to "resources/public/js/app.js",
      :source-map true,
      :pretty-print true}}
    {:source-paths ["src-cljs"],
     :id "release",
     :compiler
     {:closure-warnings {:non-standard-jsdoc :off},
      :optimizations :advanced,
      :output-to "resources/public/js/app.js",
      :output-wrapper false,
      :pretty-print false}}]}

  :plugins
  [[lein-ring "0.8.10"]
   [lein-environ "0.5.0"]
   [lein-cljsbuild "1.0.3"]]

  :url
  "http://example.com/FIXME"

  :profiles
  {:uberjar {:aot :all},
   :production
   {:ring
    {:open-browser? false, :stacktraces? false, :auto-reload? false}},
   :dev
   {:dependencies
    [[ring-mock "0.1.5"]
     [ring/ring-devel "1.3.0"]
     [pjstadig/humane-test-output "0.6.0"]],
    :injections
    [(require 'pjstadig.humane-test-output)
     (pjstadig.humane-test-output/activate!)],
    :env {:dev true}}}
  :jvm-opts
  ["-server"]
  :dependencies
  [[cljs-ajax "0.2.6"]
   [com.cognitect/transit-cljs "0.8.137"]
   [com.cognitect/transit-clj "0.8.229"]
   [selmer "0.6.9"]
   [reagent "0.4.2"]
   [com.taoensso/timbre "3.2.1"]
   [markdown-clj "0.9.47"]
   [noir-exception "0.2.2"]
   [environ "0.5.0"]
   [org.clojure/clojurescript "0.0-2268"]
   [secretary "1.2.0"]
   [org.clojure/clojure "1.6.0"]
   [ring-server "0.3.1"]
   [com.taoensso/tower "2.0.2"]
   [lib-noir "0.8.4"]]
  :repl-options
  {:init-ns test-commute.repl}
  :min-lein-version "2.0.0")
