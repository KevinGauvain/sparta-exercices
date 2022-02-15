type Draw = number[];

export function lottery_draw(): Draw {
  const result = [];
  for (let i = 0; i < 6; i++) {
    const number = Math.floor(Math.random() * 101);
    result.push(number);
  }
  return result;
}
