const sumFromString = str => (str.match(/\d+/g) || []).map(Number).reduce((a, b) => a + b, 0)



