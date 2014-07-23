(ns test-commute.routes.home
  (:require [test-commute.layout :as layout]
            [test-commute.util :as util]
            [compojure.core :refer :all]
            [noir.response :refer [edn]]
            [clojure.pprint :refer [pprint]]
            [cognitect.transit :as transit])
  (:import [java.io ByteArrayInputStream ByteArrayOutputStream]
           [java.nio.charset StandardCharsets]))

(defn home-page []
      (layout/render
        "home.html" {:content (util/md->html "/md/docs.md")}))

(defn save-document [doc]
      (pprint doc)
      {:status "ok"})

(defn transit []
  (let [out (ByteArrayOutputStream. 4096)
        writer (transit/writer out :json)]
    (transit/write writer ["Sweet Transit Bro" #{1 4 8}])
    (.toString out)))

(defn transit-parse-body [body]
  (pprint body)
  (let [reader (-> body
                   (.getBytes StandardCharsets/UTF_8)
                   (ByteArrayInputStream.)
                   (transit/reader :json))]
    (transit/read reader)))

(defn transit-generate-body [body]
  (let [out (ByteArrayOutputStream. 4096)
        writer (transit/writer out :json)]
    (transit/write writer body)
    (.toString out)))

(defn transit-ping [tr]
  (let [body (transit-parse-body tr)]
    (prn "Got: " body)
    (transit-generate-body (conj body "ping"))))

(defroutes home-routes
  (GET "/" [] (home-page))
  (POST "/save" {:keys [body-params]}
        (edn (save-document body-params)))
  (GET "/transit" [] (transit))
  (POST "/ping" {{:keys [payload]} :body-params} (transit-ping payload)))
