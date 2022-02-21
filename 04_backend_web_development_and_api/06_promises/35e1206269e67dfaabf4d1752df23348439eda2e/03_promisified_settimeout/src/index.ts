// import fetch from "node-fetch";

import { resolveConfig } from "prettier";

function waitFor(time: number): Promise<void> {
  // setTimeout(time);
  return new Promise((resolve, reject) => {
    // resolve(setTimeout(time));
    //  if(setTimeout(time)) {
    //   resolve();
    //  }
    setTimeout(resolve, time);
    resolve(console.log(`This will be printed after ${time / 1000} seconds`));
  });
}

// correction :
// setTimeOut (() => resolve(`This will be printed after ${time / 1000} seconds`), time);

export { waitFor };

waitFor(8000);
// function setTimeout(time: number): void {
//   console.log(`This will be printed after ${time / 1000} seconds`);
// }

// waitFor(10000).then(() => {
//   setTimeout(10000);
// });

// --------------------------------------------------------------------------------------
// someFunctionThatReturnsAPromise().then((successString) => {
//   console.log(successString);
// });

// function doSomethingThatCanFail(bl: string): string {
//   return bl;
// }

// function someFunctionThatReturnsAPromise(): Promise<string> {
//   return new Promise((resolve, reject) => {
//     if (doSomethingThatCanFail("ggg")) {
//       resolve("gbgbgb");
//     } else {
//       reject("An error occured");
//     }
//   });
// }

// someFunctionThatReturnsAPromise().then((successString) => {
//   console.log(successString);
// });

// console.log(`This will be printed after ${time / 1000} seconds`);
