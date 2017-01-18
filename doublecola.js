function whoIsNext(names, r){
    var length = names.length
    while(r>=length){
        r -= length
        length *= 2
    }
    return names[Math.ceil(names.length * r / length) -1]
}