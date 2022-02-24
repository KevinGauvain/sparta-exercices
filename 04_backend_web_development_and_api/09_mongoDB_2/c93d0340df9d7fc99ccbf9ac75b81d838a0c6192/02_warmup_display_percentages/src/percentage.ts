export function humanPercentage(percentages: number[]): string[] {
  const percentagesNotRound = percentages.map((element) => element * 100);
  const result = percentagesNotRound.map((element) => `${Math.round(element)}%`);
  return result;
  // console.log("------", result);
}
