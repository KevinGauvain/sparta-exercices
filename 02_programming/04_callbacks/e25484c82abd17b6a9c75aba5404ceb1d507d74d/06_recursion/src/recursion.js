const findPosition = (listOfPersons, person, integer) => {
  // Code here
  if (
    listOfPersons.every((word) => typeof word === "string") &&
    typeof person === "string" &&
    Number.isInteger(integer) === true
  ) {
    if (integer < listOfPersons.length) {
      if (listOfPersons[integer] === person) {
        return `${person} is at position #${integer + 1} in this array.`;
      } else {
        return findPosition(listOfPersons, person, integer + 1);
      }
    } else {
      return `${person} is not present in this array.`;
    }
  } else {
    throw new Error("This parameter is not allow for this function");
  }
};

/*function ckeckIfString (parameter1) {
return typeof parameter1 === "string";
}*/

/*if (typeof listOfPersons === [] && typeof person === "string" && Number.isInteger(integer)) {
    if (integer < listOfPersons.length) {
      if (listOfPersons[integer] === person) {
        return `${person} is at position #${integer + 1} in this array.`;
      } else {
        return findPosition(listOfPersons, person, integer + 1);
      }
    } else {
      return `${person} is not present in this array.`;
    }
  }
  throw new Error("This parameter is not allow for this function");
};*/

// console.log(typeof listOfPersons);

// Leave line below for tests to work properly
module.exports = findPosition;
