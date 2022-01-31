function letterCount(string, character) {
  // Code here
  const sliped = string.split(character);
  console.log(sliped);
  const test = sliped.length - 1;
  console.log(test);
  return test;

  /*let i = 0;
  for (i = 0; i < sliped.length; i++) {
    const result = sliped.length[i] - 1;
    console.log(result);
  }*/
}

letterCount("gattaca", "a");

// Do not remove the following line, it is for tests
module.exports = letterCount;

/*
let letNUmber = 0;
for (let i = 0; i < word.length; i++) {
  if (word[i] === letter) {
    letterNumber++;
  }
  }
  return letterNumber;
  */
