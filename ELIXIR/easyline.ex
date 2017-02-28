defmodule Easyline do

  def easyline(n) do
    div(product(n + 1 .. 2 * n), product(1 .. n))
  end

  defp product(xs) do
    Enum.reduce(xs, 1, &(&1 * &2))
  end
end
