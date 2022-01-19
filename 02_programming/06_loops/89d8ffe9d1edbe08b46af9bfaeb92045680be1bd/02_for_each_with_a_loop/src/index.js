function forEachLoop(numbers, log) {
  // Code the function here.
  for (let i = 0; i < numbers.length; i++) {
    log(numbers[i]);
  }
}

/*const result = log(numbers);
  for (let i = 0; i < numbers.length; i++) {
    const result = log(numbers[i]);
    console.log(result);
  }
}

for (const result of log(number)) {
console.log((result));
}
}*/

// Do not remove the following lines, it is for tests
module.exports = forEachLoop;
