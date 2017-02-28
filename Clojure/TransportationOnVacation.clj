(ns rentalcarcost.core)

(defn rental-car-cost [d]
  (def cost (* d 40)
    (cond
      (>= d 7) (- cost 50)
      (>= d 3) (- cost 20)
      :else cost)
    )
  )
