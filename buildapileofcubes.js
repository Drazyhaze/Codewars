const findNb = m => {
    let result = 0,
        volume = 0

    //Using a while loop because volume starts at 0, and m is our total volume of all the cubes
    while (volume < m) {
        //incrementing my result here
        result = result + 1
            //using Math.pow^3 to find our volume 
        volume += Math.power(result, 3)
    }
    if (volume != m) {
        return -1
    } else {
        return result
    }
}