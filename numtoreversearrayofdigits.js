const digitize = n => {
let myStr = n.toString()
return myStr.split('').map(Number).reverse()
}