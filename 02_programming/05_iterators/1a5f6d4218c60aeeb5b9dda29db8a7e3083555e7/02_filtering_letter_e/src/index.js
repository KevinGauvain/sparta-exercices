function theEFilter(sentences) {


  const filtre1 = sentences.filter((letter) => {
    if (letter.includes("e")) {
      return letter;
    }
    else if (letter.includes("E")) {
      return letter;
    }
    return false;
  });
  return filtre1;
}
const tab1 = ["sarah", "Jean", "Yves"];
console.log(theEFilter(tab1));

// if correspond à la même chose => letter.includes("e") || letter.includes("E");

// Do not remove the following line, it is for tests
module.exports = theEFilter;
