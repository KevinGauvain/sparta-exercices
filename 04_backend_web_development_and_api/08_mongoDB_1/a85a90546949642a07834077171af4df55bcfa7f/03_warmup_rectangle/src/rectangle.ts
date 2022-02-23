export function rectangle(width: number, height: number): string {
  const widthStar = [];
  for (let i = 0; i < height; i++) {
    const star = "*";
    widthStar.push(star.repeat(width));
  }
  const result = widthStar.join("\n");
  return result;
}
