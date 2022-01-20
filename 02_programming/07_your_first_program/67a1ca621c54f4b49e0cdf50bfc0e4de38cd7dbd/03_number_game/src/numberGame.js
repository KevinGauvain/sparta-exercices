function numberGame(reader, min = 1, max = 100) {
  // code here
  const theMysteryNumber = Math.round(Math.random() * (max - min) + min);
  let i = Math.floor(Math.random() * 100);
  const startProgram = () =>
    reader.question("Enter a number ", (answer) => {
      //console.log(typeof answer);
      const parsedAnswer = parseInt(answer, 10);
      //console.log(parsedAnswer);
      //console.log(typeof parsedAnswer);
      if (isNaN(parsedAnswer)) {
        console.log("This was not a number");
        startProgram();
      } else if (parsedAnswer < min || parsedAnswer > max) {
        console.log("The number is between 1 and 100");
        startProgram();
      } else if (parsedAnswer < theMysteryNumber) {
        console.log("Too low");
        startProgram();
      } else if (parsedAnswer > theMysteryNumber) {
        console.log("Too high");
        startProgram();
      } /*else if (parsedAnswer === 100) {
        console.log("You won!");
      } */ else {
        console.log("You won!");
        reader.close();
      }
    });
  startProgram();
}

module.exports = numberGame;

/*function randomNumber() {
  for (let i = 1; i < 100; i++) {
    console.log(randomNumber(min, max));
  }
}

function game (reader) {
  console.log("glbbllg");
  name(reader, 42)
}

function numberRandom () {
  console.log(randNumber();
  )
}

function name() {
  for (let i = 0; i < 100; i++) {
  console.log(garRandomNumber(1, 100))};
  numberGame(reader, min = 1, max = 100);
};

function randomNumber() {
  for (let i = 1; i < 100; i++) {
    console.log(randomNumber(1, 100));
  }
  numberGame(reader, min, max);
}*/
