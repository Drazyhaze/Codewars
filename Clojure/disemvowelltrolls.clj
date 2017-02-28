;;Solution1
(ns disemvowel-trolls)


(defn disemvowel
  [string]
  (clojure.string/replace string #"(?i)[aeiou]" ""))
