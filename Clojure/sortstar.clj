;; Solution 1
(ns clojure.star-sort)

(defn star-sort [arr]
  (clojure.string/join "***" (first (sort arr))))

;; Solution 2
(ns clojure.star-sort)
(require '[clojure.string :as string])

(defn star-sort [arr]
  (->> (sort arr)
       (first)
       (string/join "***")))

;; Solution 3
(ns clojure.star-sort)
(require '[clojure.string :as str])
(defn star-sort [arr]
  (->> arr
       sort
       first
       (str/join "***")))
