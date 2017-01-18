Rob i#Solution 1

defmodule MinMax do
  def min(list) do
    Enum.min(list)
  end

  def max(list) do
    Enum.max(list)
  end
end

#Solution 2

defmodule MinMax do
  def min(list) do
    list |> Enum.sort |> List.first
  end

  def max(list) do
    list |> Enum.sort |> List.last
  end
end
