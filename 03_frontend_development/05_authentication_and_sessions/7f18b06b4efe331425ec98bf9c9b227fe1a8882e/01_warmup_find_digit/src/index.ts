// Code here
function findDigit(arrayOfNumbers: number[], digit: number): number[] {
  const result = [];
  const digitToString = digit.toString();
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    result.push(arrayOfNumbers[i].toString());
  }
  //console.log(result);

  const result2Includes = [];

  for (let i = 0; i < result.length; i++) {
    if (result[i].includes(digitToString) === true) {
      result2Includes.push(result[i]);
    }
  }
  // console.log(result2Includes);

  const result3Number = [];

  for (let i = 0; i < result2Includes.length; i++) {
    result3Number.push(Number(result2Includes[i]));
  }

  // console.log(result3Number);
  return result3Number;
}

const arrayTest = [23, 43, 2, 78];

findDigit(arrayTest, 2);

export { findDigit };

/*
const test = arrayOfNumbers.toString();
  console.log("-------test------", test);
  const test2 = digit.toString();
  console.log("----------test2-------", test2);
  const result = [];
  // console.log("-------result------", result);
  for (let i = 0; i < test.length; i++) {
    if (test[i].includes(test2)) {
      result.push(test[i]);
    }
  }
  console.log("-----result-----", result);
  const result2 = result.map(parseInt);
  console.log("--------result2------", result2);
  return result2;
}
*/
