;; Solution 1
(ns noboringzeros.core)

(defn no-boring-zeros [n]
  (cond
    (zero? n) n
    (zero? (rem n 10)) (recur (/ n 10))
    :else n))

;; Solution 2
(ns noboringzeros.core)

(defn no-boring-zeros [n]
  (cond
    (zero? n) n
    (zero? (mod n 10)) (recur (/ n 10))
    :else n))
