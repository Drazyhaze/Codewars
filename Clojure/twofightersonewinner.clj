(ns clojure.two-fighters)

(defn declare-winner [f1 f2]
  (cond
    (<= (:hp f1) 0) (:name f2)
    (<= (:hp f1) 0) (:name f2)
