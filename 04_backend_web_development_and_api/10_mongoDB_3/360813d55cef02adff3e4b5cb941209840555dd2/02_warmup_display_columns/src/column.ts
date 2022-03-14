export function column(numberOfLines: number, lineContent: string): string {
  const stringPrinted = lineContent;
  const arrayStar = [];
  for (let i = 0; i < numberOfLines; i++) {
    arrayStar.push(stringPrinted + "\n");
  }
  // console.log("---lg7----", arrayStar);
  const result = arrayStar.join("");
  // console.log("-------lg9-------", result);
  return result;
}
