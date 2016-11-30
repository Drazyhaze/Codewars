function howMuchILoveYou(nbPetals) {
    let petals = {
      1: "I love you",
      2: "a little",
      3: "a lot",
      4: "passionately",
      5: "madly",
      6: "not at all"
    }
    if(nbPetals % 6 === 0){
      return petals[6]
    }else{
      return petals[nbPetals%6] 
    }
}