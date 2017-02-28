;; Solution 1
(ns XOR)

(defn xor [a,b] (not= (true? a) (true? b)))

;; Solution 2
(ns XOR)

(defn xor [a,b]
  (not= a b)
)
