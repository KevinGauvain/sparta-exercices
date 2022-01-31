function triangle(size) {
  // Code here
  const star = "*";
  let i = 0;
  for (i = 0; i < size; i++) {
    console.log(star.repeat([i + 1]));
  }
}

triangle();

// Do not remove the following line, it is for tests
module.exports = triangle;
