function shouldIMakeATicket(isStuck, timeBeingStuck, hourOfTheDay) {
  // Code your function here
  if (
    isStuck === true &&
    timeBeingStuck >= 20 &&
    ((hourOfTheDay >= 9 && hourOfTheDay < 13) || (hourOfTheDay >= 14 && hourOfTheDay < 18))
  ) {
    console.log("true");
    return true;
  } else {
    console.log(false);
    return false;
  }
}

// If (truc === false && (temps > 30 && temps < 40))

/* const person = {
  firstname: "Abdel",
  lastname: "Sadki",
  fullname: function () {
    return `${this.firstname} ${this.lastname}`;
  },
}; */

// Don't touch this for tests to execute properly
module.exports = shouldIMakeATicket;

/* if (isStuck === true) {
    if (timeBeingStuck >= 20) {
      if (hourOfTheDay === [9 - 13] || [14 - 18]) {
        console.log("true");
      } else {
        console.log(false);
      }
    } else {
      console.log(false);
    }
  } else {
    console.log(false);
  }
  return;
}*/
