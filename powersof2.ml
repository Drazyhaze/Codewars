let rec powersOfTwo n = 
  match (n) with
        0 -> 1 :: []
        | value -> powersOfTwo (n - 1) @ [int_of_float (2. ** float_of_int n)]
