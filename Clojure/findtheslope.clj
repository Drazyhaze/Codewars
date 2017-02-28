(ns Slope)  

(defn slope [v]
  (let [[x1 y1 x2 y2] v]
    (if (zero? (- x2 x1))
      "undefined"
      (str (/ (- y2 y1) (- x2 x1))))))
