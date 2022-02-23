export function sumTwoSmallestNumbers(myArray: number[]): number {
  const sorted = myArray.sort((a, b) => a - b);
  // console.log(sorted);
  // if (sorted.length > 4) {
  const result = sorted[0] + sorted[1];
  // } else {
  //   throw console.error("Erreur");

  // }
  return result;
}

const test = [12, 5, 7, 43, 8];
console.log(sumTwoSmallestNumbers(test));

// ----------------------------------------------------------------
//   const number1 = Math.min(...myArray);
//   console.log("-----lg3-----", number1);
//   const myNewArray = [];
//   console.log("-------lg5-----", myNewArray);
//   let counter = 0;
//   for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] !== number1) {
//       myNewArray.push(myArray[i]);
//     } else if (myArray[i] === number1) {
//       if ====> pas push si présent qu'une fois et push si présent plus qu'une fois
//     }
//     console.log(myArray);
//   }
//   const number2 = Math.min(...myNewArray);
//   console.log("------------lg14------", number2);
//   const result = number1 + number2;
//   console.log("------lg16----", result);
//   return result;
// }

// const array1 = [5, 2, 83, 4, 2, 9, 15];

// sumTwoSmallestNumbers(array1);

// console.log(Math.min(...array1));
// // expected output: 1