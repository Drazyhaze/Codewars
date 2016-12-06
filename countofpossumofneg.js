const countPositivesSumNegatives = input => {
	let posInt = 0
	let negInt = 0
    if (input == null || input.length == 0)
      return [];
    for (var i=0, l=input.length; i<l; ++i) {
  		(input[i] > 0) ? posInt = posInt + 1 : (negInt += input[i])
    } 
    return [posInt, negInt];
}

//Using Filter and Reduce

const countPositivesSumNegatives = a => {
    if(a && a.length){
        var pos = a.filter(x => x > 0).length
        var neg = a.reduce((a, b) => b < 0 ?  a + b : a, 0)
        return ([pos, neg])
    } else { 
        return []
    }
} 