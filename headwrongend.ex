defmodule Codewars.Zoo do
  def fix_the_meerkat(tuple) do
  {h,b,t} = tuple
  {t,b,h}
  end
end


## non tuple

defmodule Codewars.Zoo do
  def fix_the_meerkat({t, b, h}), do: {h, b, t}
end
