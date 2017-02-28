(ns clojure.girl-age)

(defn how-old
  [her-old]
 ((comp read-string str) (first her-old)))
