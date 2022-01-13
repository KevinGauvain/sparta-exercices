function oddEven(number) {
  // Code the function here.
  if (Number.isInteger(number) && number % 2 === 0) {
    return `${number} is an even number.`;
  } else if (Number.isInteger(number) && number % 2 !== 0) {
    return `${number} is an odd number.`;
  } else {
    console.log(`${number} is not a number.`);
  }
}
console.log(oddEven(3));
// Do not remove last lines, it is for tests
module.exports = oddEven;
