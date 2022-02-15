import { lottery_draw } from "./lottery_draw";
import { Draw } from "./types";

export function checkIfIWon(ticket: Draw): void {
  // Code the function here
  const tirage1 = lottery_draw();
  if (tirage1[0] === ticket[0] && tirage1[1] === ticket[1] && tirage1[2] === ticket[2]) {
    console.log("You won the lottery!");
  } else {
    console.log("You lost...");
  }
}
