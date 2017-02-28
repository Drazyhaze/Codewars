defmodule Rent do
  def rental_car_cost(d) do
    cost = 40*d
      cond do
    d > 6 ->
      cost - 50
    d > 2 ->
      cost - 20
        true ->
        cost
    end
  end
end
