function sing() {
  // code here
  const ligneDeChanson = [];
  for (let i = 0; i < 100; i++) {
    ligneDeChanson.push(`${99 - [i]} bottles of beer on the wall, ${99 - [i]} bottles of beer.`);
    ligneDeChanson.push(`Take one down and pass it around, ${98 - i} bottles of beer on the wall.`);
  }
  if (ligneDeChanson === "1 bottles of beer on the wall, 1 bottles of beer.") {
    ligneDeChanson.push("1 bottle of beer on the wall, 1 bottle of beer.");
  }
  if (ligneDeChanson === "Take one down and pass it around, 1 bottles of beer on the wall.") {
    ligneDeChanson.push("Take one down and pass it around, 1 bottle of beer on the wall.");
  }
  return ligneDeChanson;
}

// Do not remove the following line, it is for tests
module.exports = sing;
