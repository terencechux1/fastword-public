(ns fastword.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]))

;; -------------------------
;; Views

(def word (r/atom "test"))

(defn change-word []
  (reset! word "pass"))

(defn buttons []
  [:div.action_btn {:style {:margin-top "100px"}}
   [:button.button-3 {:style {:margin-right "100px"}
                      :on-click change-word} "Yes"]
   [:button.button-4 "No"]])

(defn the-word []
  [:div {:style {:font-size "45px"}} @word])

(defn home-page []
  [:div [:h2 "Welcome to fast word"]
   [the-word]
   [buttons]]
  )

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
