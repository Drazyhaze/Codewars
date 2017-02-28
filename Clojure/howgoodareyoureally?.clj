(ns kata.how-good-are-you)
(defn better_than_average [class_points your_points]
  (if (> your_points (/ (apply + class_points) (count class_points)))
    true false))
