export function line(numberOfStars: number): string {
  const star = "*";
  const arrayStar = [];
  for (let i = 0; i < numberOfStars; i++) {
    arrayStar.push(star);
  }
  // console.log("---lg7----", arrayStar);
  const result = arrayStar.join("");
  // console.log("-------lg9-------", result);
  return result;
}
