function square(size) {
  // Code here
  const star = "*";
  let i = 0;
  for (i = 0; i < size; i++) {
    console.log(star.repeat(size));
  }
}

square(5);

// Do not remove the following line, it is for tests
module.exports = square;
