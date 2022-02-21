type ParamRest = string[];

export function greetEveryone(...param1: ParamRest): void {
  // Code your function here
  param1.forEach((element) => {
    console.log(`Welcome to ${element}`);
  });
}
