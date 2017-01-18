const authList = arr => arr.every( (x) => {
    return /^(?=.*\d+)(?=.*[a-z])[a-z\d]{6,10}$/.test(x)
  })