function addition(number1, number2) {
  // Code here
  return number1 + number2;
}

function substraction(number1, number2) {
  // Code here
  return number1 - number2;
}

function multiplication(number1, number2) {
  // Code here
  return number1 * number2;
}

function division(number1, number2) {
  // Code here
  return number1 / number2;
}

function chooseOperation(number1, number2, operation) {
  // Code here
  if (Number.isInteger(number1) && Number.isInteger(number2) && typeof operation === "function") {
    if (operation === addition) {
      return addition(number1, number2);
    } else if (operation === substraction) {
      return substraction(number1, number2);
    } else if (operation === multiplication) {
      return multiplication(number1, number2);
    } else if (operation === division) {
      return division(number1, number2);
    }
  } else {
    throw new Error("parameters types is different than we expected");
  }
}

// Leave the line below for tests to work
module.exports = { chooseOperation, addition, substraction, multiplication, division };
