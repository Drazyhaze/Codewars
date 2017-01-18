const getNum = n => [1, 10, 9, 12, 3, 4][n % 6];

const thirt = n => {
  let result = [...`${n}`].reverse().reduce((s, v, i) => s + v * getNum(i), 0);
  return result === n ? result : thirt(result);
}