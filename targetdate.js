const dateNbDays = (a0,a,p) => {
let eQ = Math.log,
theDays = Math.ceil((eQ(a) - eQ(a0))/eQ(1 + p/36e3)),
theDate = new Date (2016, 0, 1 + theDays)
//Converting theDate to ISOString here. Then removing everything from T and on.
return theDate.toISOString().split('T')[0];
}
