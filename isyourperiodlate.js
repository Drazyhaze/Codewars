const periodIsLate = (last, today, cycleLength) => {
let myForm = (1000 * 60 * 60 * 24)
return Math.floor((today-last) / myForm) > cycleLength
}