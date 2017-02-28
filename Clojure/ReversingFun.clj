

;;Solution 1

(ns reversefun.core)

(defn reverse-fun [s]
  (->> (interleave (reverse s) s)
  (take (count s))
  (apply str)))

;; Solution 2

(ns reversefun.core)

(defn reverse-fun [s]
    (apply str (take (count s) (interleave (reverse s) s))))
