const last = (...a) =>
 a.length > 1
   ? a.slice(-1)[0]
   : typeof a[0] === "number"
     ? a[0]
     : a[0].slice(-1)[0]
