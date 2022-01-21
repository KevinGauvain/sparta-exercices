const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const image = {
  playerOne: {
    rock: [
      "    ________        ",
      "---'   _ ,  |       ",
      "      (__(__)       ",
      "      (_____)       ",
      "      (____)        ",
      "---.__(___)         ",
    ],
    paper: [
      "      _______       ",
      "----'    ____)____  ",
      "            _______)",
      "            _______)",
      "           _______) ",
      "----.__________)    ",
    ],
    scissors: [
      "    ____           ",
      "---'    |________  ",
      "     (__)________) ",
      "        _________) ",
      "      (____)       ",
      "---.__(___)        ",
    ],
  },
  playerTwo: {
    rock: [
      "        ________    ",
      "      | , _  '---   ",
      "      (__(__)       ",
      "      (_____)       ",
      "      (____)        ",
      "       (___)__.---  ",
    ],
    paper: [
      "         _______       ",
      "  ______(_______'----",
      " (__________________",
      " (__________________ ",
      "   (_________________",
      "       (_______.----",
    ],
    scissors: [
      "               ____",
      "      ________|    '---",
      "    (________(__)",
      "   (_________",
      "        (____)",
      "        (___)__.---",
    ],
  },
};

console.log("Welcome to ShiFuMi");
// game();
function playerOneAnswer(userNumber) {
  if (userNumber === 0) {
    console.log(image.playerOne.rock);
  } else if (userNumber === 1) {
    console.log(image.playerOne.paper);
  } else if (userNumber === 2) {
    console.log(image.playerOne.scissors);
  } else {
    console.log("Please respect rules");
    game();
  }
}

function playerTwoAnswer(randomNumber) {
  if (randomNumber === 0) {
    console.log(image.playerTwo.rock);
  } else if (randomNumber === 1) {
    console.log(image.playerTwo.paper);
  } else if (randomNumber === 2) {
    console.log(image.playerTwo.scissors);
  }
}

function compareChoices(userNumber, randomNumber) {
  if (userNumber === randomNumber) {
    console.log("No winners, try again\n");
    return reader.question;
  } else if (userNumber === 0 && randomNumber === 1) {
    console.log("Looser\n");
  } else if (userNumber === 0 && randomNumber === 2) {
    console.log("You win\n");
  } else if (userNumber === 1 && randomNumber === 2) {
    console.log("Looser\n");
  } else if (userNumber === 1 && randomNumber === 0) {
    console.log("You win\n");
  } else if (userNumber === 2 && randomNumber === 0) {
    console.log("Looser\n");
  } else if (userNumber === 2 && randomNumber === 1) {
    console.log("You win\n");
  }
}

function restartGame() {
  return game();
}

function playAgain() {
  reader.question("Play Again : y or n ?\n", (answerAgainOrNot) => {
    if (answerAgainOrNot === "y") {
      restartGame();
    } else {
      console.log("OK, thank you for your visit, bye");
      reader.close();
    }
  });
}

function game() {
  reader.question("Please choose a move : 1, 2, 3\n> ", (move) => {
    const parsedMove = parseInt(move);
    const choiceOfReader = parsedMove - 1;
    console.log("Player move");
    playerOneAnswer(choiceOfReader);
    console.log("Cpu move");
    playerTwoAnswer(roundRandomNumberMultiTwo);
    compareChoices(choiceOfReader, roundRandomNumberMultiTwo);
    playAgain();
  });
}

game();

const randomNumber = Math.random();
//console.log(randomNumber);
const randomNumberMultiByTwo = randomNumber * 2;
//console.log(randomNumberMultiByTwo);
const roundRandomNumberMultiTwo = Math.round(randomNumberMultiByTwo);
//console.log(roundRandomNumberMultiTwo);

/*function compareChoices(userNumber, randomNumber) {
  if (userNumber === randomNumber) {
    console.log("No winners, try again\n");
    return reader.question;
  } else if (userNumber === 0 && randomNumber === 1) {
    console.log("Looser\n");
  } else if (userNumber === 0 && randomNumber === 2) {
    console.log("You win\n");
  } else if (userNumber === 1 && randomNumber === 2) {
    console.log("Looser\n");
  } else if (userNumber === 1 && randomNumber === 0) {
    console.log("You win\n");
  } else if (userNumber === 2 && randomNumber === 0) {
    console.log("Looser\n");
  } else if (userNumber === 2 && randomNumber === 1) {
    console.log("You win\n");
  }
}

function restartGame() {
  return game();
}

function playAgain() {
  reader.question("Play Again : y or n ?\n", (answerAgainOrNot) => {
    if (answerAgainOrNot === "y") {
      restartGame();
    } else {
      console.log("OK, thank you for your visit, bye");
      reader.close();
    }
  });
}

function game() {
  reader.question("Please choose a move : 1, 2, 3\n> ", (move) => {
    const parsedMove = parseInt(move);
    const choiceOfReader = parsedMove - 1;
    console.log("Player move");
    playerOneAnswer(choiceOfReader);
    console.log("Cpu move");
    playerTwoAnswer(roundRandomNumberMultiTwo);
    compareChoices(choiceOfReader, roundRandomNumberMultiTwo);
    playAgain();
  });
}

game();

/* const clear = () => console.log("\x1B[2J\x1B[0f");

clear();



function increment(number) {
  return number + 1;
}
function doSomethingToANumber(number, func) {
  return func(number);
}



function forever() {
  forever();
}







/*function compareChoices() {
  if (result === roundRandomNumberMultiTwo) {
    console.log("No winners, try again");
    return;
  } else if (result === 0 && roundRandomNumberMultiTwo === 1) {
    console.log("Looser");
  } else if (result === 0 && roundRandomNumberMultiTwo === 2) {
    console.log("You win");
  } else {
    return;
  }
}*/

/*question: reader.question("Please choose a move : 1, 2, 3\n> ", (move) => {
  if (move === 1) {
    console.log(rock);
  } else if (move === 2) {
    console.log(paper);
  } else if (move === 3) {
    console.log(scissors);
  } else {
    return reader.questions();
  }
});

  const moveOne = rock;
  const moveTwo = paper;
  const moveThree = scissors;
  if (move === 1) {
    console.log(moveOne);


/* const game = {
  startGame: function () {
    reader.question("Please choose a move : 1, 2, 3\n> ", (move) => {
      const parsedMove = parseInt(move);
      const choiceOfReader = parsedMove - 1; //donner accès à cette valeur à un endroit où je veux
      console.log(roundRandomNumberMultiTwo);
      function compareChoices() {
        if (choiceOfReader === roundRandomNumberMultiTwo) {
          console.log("No winners, try again");
          return reader.question;
        } else if (choiceOfReader === 0 && roundRandomNumberMultiTwo === 1) {
          console.log("Looser");
        } else if (choiceOfReader === 0 && roundRandomNumberMultiTwo === 2) {
          console.log("You win");
        } else if (choiceOfReader === 1 && roundRandomNumberMultiTwo === 2) {
          console.log("Looser");
        } else if (choiceOfReader === 1 && roundRandomNumberMultiTwo === 0) {
          console.log("You win");
        } else if (choiceOfReader === 2 && roundRandomNumberMultiTwo === 0) {
          console.log("Looser");
        } else if (choiceOfReader === 2 && roundRandomNumberMultiTwo === 1) {
          console.log("You win");
        } else {
          return this;
        }
      }
      compareChoices();
    });
  },
};

console.log(game.startGame());

const randomNumber = Math.random();
//console.log(randomNumber);
const randomNumberMultiByTwo = randomNumber * 2;
//console.log(randomNumberMultiByTwo);
const roundRandomNumberMultiTwo = Math.round(randomNumberMultiByTwo);
//console.log(roundRandomNumberMultiTwo)*/
