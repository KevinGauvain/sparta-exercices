type MyTuple = [string, number];

function handleTuple(tuple: MyTuple): void {
  // Code the function here.
  if (typeof tuple[0] === "string" && typeof tuple[1] === "number") {
    console.log(`${tuple[0]} is a string`);
    console.log(`${tuple[1]} is a number`);
  }
}

handleTuple(["foo", 42]);

// type Output = [void, void];

// Leave the line below for tests to work properly.
export { handleTuple };
