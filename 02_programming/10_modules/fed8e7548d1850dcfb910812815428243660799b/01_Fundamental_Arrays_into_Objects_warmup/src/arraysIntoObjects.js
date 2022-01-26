const arraysIntoObjects = (keysArray, valuesArray) => {
  /// Code your function here
  /* obj {
    keysArray: valuesArray;
  }*/

  const result = {};
  for (let i = 0; i < keysArray.length; i++) {
    result[keysArray[i]] = valuesArray[i];
  }
  return result;
  // keysArray: valuesArray,
};

console.log(arraysIntoObjects);

// Don't change this line for tests to run properly
export default arraysIntoObjects;
