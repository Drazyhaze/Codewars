;; Solution 1
(ns exclamation-mark.core)

(defn remove-bang [s]
  (str (clojure.string/replace s #"!" "") "!"))

;; Solution 2
(ns exclamation-mark.core)

(defn remove-bang [s]
  (-> s (.replace "!" "") (.concat "!")))
