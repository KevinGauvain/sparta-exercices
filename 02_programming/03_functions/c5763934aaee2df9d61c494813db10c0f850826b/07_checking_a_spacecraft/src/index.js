// Code here
const stealthyFuelLevelCheck = (number) => {
  if (number > 20) {
    return "Fuel level: green";
  } else if (number > 10 && number < 20) {
    return "Fuel level: yellow";
  } else {
    return "Fuel level: red";
  }
};

const stealthyCargoHoldCheck = (array) => {
  if (array.length === 4) {
    return "Full";
  } else if (array.length < 4) {
    const spaceRemaining = 4 - array.length;
    return `Spaces available: ${spaceRemaining}`;
  } else if (array.length > 4) {
    const overCapacity = array.length - 4;
    return `Over capacity by ${overCapacity} items.`;
  }
};

// Do not remove last lines, it is for tests

module.exports = { stealthyFuelLevelCheck, stealthyCargoHoldCheck };
