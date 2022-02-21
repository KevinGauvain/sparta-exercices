import { getRandomFace } from "./random-face";
// import fetch from "node-fetch";

function headOrTail(face: string): Promise<string> {
  const result = getRandomFace();
  return new Promise((resolve, reject) => {
    if (result === face) {
      resolve("Well done.");
    } else if (result !== face) {
      reject("Nope.");
    }
  });
}

// headOrTail("head");

export { headOrTail };

// -----------------------------------------------------------------------------

// someFunctionThatReturnAPromiseOfAString() // this is typed as Promise<string>
//   .then((aString) => aString.length) // this is typed as Promise<number>
//   .then((length) => length % 2 === 0) // this is typed as Promise<boolean>
//   .then((isEven) =>

// return new Promise((resolve, reject) => {
//   if (doSomethingThatCanFail()) {
//     resolve("Everything went well");
//   } else {
//     reject("An error occured");
//   }

//   return new Promise((resolve, reject) => {
//     if (getRandomFace() === face) {
//       resolve("Well done.");
//     } else {
//       reject(console.log("Nope."));
//     }
//   });
// }
