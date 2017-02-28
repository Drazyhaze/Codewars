defmodule Shepherd do
  def count_sheeps(sheeps) do
    Enum.count(sheeps, &(&1))
  end
end

# or like this, same solution using alternative anonymous function syntax

defmodule Shepherd do
  def count_sheeps(sheeps) do

    Enum.count(sheeps, fn(x) -> x end)
  end
end
