const isOpposite = (s1,s2) => {
  return s1.split('')
  .map(test => test === test.toUpperCase() ? test.toLowerCase() : test.toUpperCase())
  .join('') === s2 && s1 !== '';
}
