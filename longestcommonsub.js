function LCS(a, b) {
  var aSub = a.substr(0, a.length - 1);
  var bSub = b.substr(0, b.length - 1);
 
  if (a.length === 0 || b.length === 0) {
    return '';
  } else if (a.charAt(a.length - 1) === b.charAt(b.length - 1)) {
    return LCS(aSub, bSub) + a.charAt(a.length - 1);
  } else {
    var x = LCS(a, bSub);
    var y = LCS(aSub, b);
    return (x.length > y.length) ? x : y;
  }
}