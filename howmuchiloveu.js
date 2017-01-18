const howMuchILoveYou = nbPetals => {
  const petals = {
      1: "I love you",
      2: "a little",
      3: "a lot",
      4: "passionately",
      5: "madly",
      6: "not at all"
  }
return (nbPetals % 6 == 0) ? petals[6] : petals[nbPetals%6]
}
undefined
howMuchILoveYou(4)
