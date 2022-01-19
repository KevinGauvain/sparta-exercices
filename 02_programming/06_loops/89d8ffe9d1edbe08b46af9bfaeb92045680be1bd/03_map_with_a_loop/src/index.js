function mapLoop(numbers, double) {
  // Code the function here.
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(double(numbers[i]));
    //console.log(numbers[i]);
  }
  //console.log(result);
  return result;
}

function double(numbers) {
  return numbers * 2;
}

mapLoop(5, double);

// Do not remove the following lines, it is for tests
module.exports = mapLoop;
