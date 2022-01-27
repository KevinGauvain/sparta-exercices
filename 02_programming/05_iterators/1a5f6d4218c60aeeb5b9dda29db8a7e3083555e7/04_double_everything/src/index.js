function double(numbers) {
  function multiply(number) {
    return number * 2;
  }
  const result = numbers.map(multiply);
  return result;
}

// Do not remove the following line, it is for tests
module.exports = double;
