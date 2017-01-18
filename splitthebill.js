function splitTheBill(x) {
    var keys = Object.keys(x);
    var avg = keys.reduce((r, k) => r+x[k], 0) / keys.length;  
    return keys.reduce((r, k) => (r[k]=Number((x[k]-avg).toFixed(2)), r), {});
}