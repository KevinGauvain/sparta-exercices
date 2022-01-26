function checkFuelLevel(integer) {
  // Code here
  if (integer > 20) {
    return "Fuel level: green";
  } else if (integer > 10) {
    return "Fuel level: yellow";
  } else {
    return "Fuel level: red";
  }
}

function checkCargoHold(array) {
  // Code here
  const newArray = array.length;
  if (newArray === 4) {
    return "Full";
  } else if (newArray < 4) {
    const spaceAvailable = 4 - newArray;
    return `Spaces available: ${spaceAvailable}`;
  } else if (newArray > 4) {
    const overCapacity = newArray - 4;
    return `Over capacity by ${overCapacity} items.`;
  }
  return;
}

// Do not remove last lines, it is for tests
module.exports = { checkFuelLevel, checkCargoHold };
