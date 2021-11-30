(ns main.core
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [clojure.string :as str]))

(defonce state
  (r/atom
    {:arc [{:x 65, :y 130.5625, :highlighted? false}
           {:x 226, :y 321.5625, :highlighted? false}
           {:x 682, :y 63.5625, :highlighted? false}
           {:x 844, :y 245.5625, :highlighted? false}]
     :ctx nil}))

(def point-r 5)

;; :on-change #(reset! time-color (-> % .-target .-value))}]])

(defn draw-point [ctx {:keys [x y highlighted?]}]
  (doto ctx
    (.beginPath)
    (-> (.-strokeStyle) (set! (if highlighted? "rgb(241 102 102)" "#ccc")))
    (-> (.-lineWidth) (set! 2))
    (.arc x y point-r 0 (* 2 js/Math.PI) false)
    (-> (.-fillStyle) (set! "#eee"))
    (.fill)
    (.stroke)))

(defn draw-canvas []
  (let [{:keys [arc ctx]} @state
        [start control1 control2 end] arc]
    (when ctx
      (doto ctx
        (.clearRect 0 0 (.-width (.-canvas ctx)) (.-height (.-canvas ctx)))
        (-> (.-strokeStyle) (set! "#222"))
        (-> (.-lineWidth) (set! 3))
        (.beginPath)
        (.moveTo (:x start) (:y start))
        (.bezierCurveTo (:x control1) (:y control1)
                        (:x control2) (:y control2)
                        (:x end) (:y end))
        (.stroke)
        (-> (.-strokeStyle) (set! "#ccc"))
        (-> (.-lineWidth) (set! 1))
        (.beginPath)
        (.moveTo (:x start) (:y start))
        (.lineTo (:x control1) (:y control1))
        (.stroke)
        (.beginPath)
        (.moveTo (:x end) (:y end))
        (.lineTo (:x control2) (:y control2))
        (.stroke)
        (draw-point control1)
        (draw-point control2)
        (draw-point start)
        (draw-point end)))
    nil))

(defn main-view []
  [:div {:style {:width :900px}}
   [:div {:style {:border-bottom "5px solid #222"
                  :margin-bottom :10px}}
    [:h1 {:style {:color :#222
                  :margin-bottom :5px}}
     "Arcs"]]
   [draw-canvas]
   ;; [:p {:style {:color "#777"}}
   ;;  (pr-str (map #(select-keys % [:x :y]) (:arc @state)))]
   ])

(defn ->xy [canvas-rect event]
  (let [x (- (.-clientX event) (.-left canvas-rect))
        y (- (.-clientY event) (.-top canvas-rect))]
    [x y]))

(defn in-vicinity? [v]
  (<= (js/Math.abs v) point-r))

(defn move-point [path x y]
  (let [point (get-in @state [:arc path])
        diff-x (- (:x point) x)
        diff-y (- (:y point) y)
        complementary-path (cond
                             (= 0 path)
                             1

                             (= 3 path)
                             2)
        complementary-point (when complementary-path
                              (get-in @state [:arc complementary-path]))]
    (swap! state assoc-in [:arc path] {:x x :y y :highlighted? true})
    (when complementary-path
      (swap! state assoc-in
             [:arc complementary-path]
             {:x (- (:x complementary-point) diff-x)
              :y (- (:y complementary-point) diff-y)}))))

(defn on-mousedown [canvas-rect event]
  (let [[x y] (->xy canvas-rect event)
        {point-path :path hit :hit}
        (reduce
          (fn [{:keys [path]} point]
            (if (and (in-vicinity? (- x (:x point)))
                     (in-vicinity? (- y (:y point))))
              (reduced {:path path :hit true})
              {:path (inc path)}))
          {:path 0}
          (:arc @state))]
    (prn :x x :y y)
    (when hit
      (move-point point-path x y)
      (swap! state assoc :dragging-path point-path))))

(defn on-mousemove [canvas-rect event]
  (when-let [path (:dragging-path @state)]
    (let [[x y] (->xy canvas-rect event)]
      (move-point path x y))))

(defn on-mouseup [canvas-rect event]
  (when-let [path (:dragging-path @state)]
    (swap! state assoc-in [:arc path :highlighted?] false)
    (swap! state dissoc :dragging-path)))

(defn setup-canvas []
  (let [canvas-element (js/document.getElementById "canvas")
        dpr (or js/window.devicePixelRatio 1)
        canvas-rect (.getBoundingClientRect canvas-element)]
    (set! (.-width canvas-element) (* dpr (.-width canvas-rect)))
    (set! (.-height canvas-element) (* dpr (.-height canvas-rect)))

    (.addEventListener canvas-element "mousedown" (partial on-mousedown canvas-rect))
    (.addEventListener canvas-element "mousemove" (partial on-mousemove canvas-rect))
    (.addEventListener canvas-element "mouseup" (partial on-mouseup canvas-rect))

    (swap! state assoc :ctx (.getContext canvas-element "2d"))))

(defn ^:dev/after-load start []
  (rdom/render [main-view] (js/document.getElementById "root"))
  (when-not (:ctx @state)
    (setup-canvas)))

(defn ^:export run []
  (start))

(run)
