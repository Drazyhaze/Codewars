(ns batman.core
  (:require [clojure.string :as s]))

(defn batman-quotes [quotes hero]
  (let [character (condp = (first hero) \B "Batman" \R "Robin" \J "Joker")
        quote-number (read-string (s/replace hero #"\D" ""))
        quote (get quotes quote-number)]
    (str character ": " quote)))

