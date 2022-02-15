import { Draw } from "./types";

export function lottery_draw(): Draw {
  const result = [];
  for (let i = 0; i < 3; i++) {
    const number = Math.floor(Math.random() * 4);
    result.push(number);
  }
  return result;
}
