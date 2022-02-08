// Code here
function sortingMachine(x: number[], y: boolean): number[] {
  if (y === true) {
    return x.sort((a, b) => a - b);
  } else if (y === false) {
    return x.sort((a, b) => b - a);
  }
}

export { sortingMachine };
