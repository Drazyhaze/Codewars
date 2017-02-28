(ns banjo)

(defn plays-banjo? [name]
  (str name
       (if (#{\r \R} (first name))
         " plays banjo"
         " does not play banjo")))
