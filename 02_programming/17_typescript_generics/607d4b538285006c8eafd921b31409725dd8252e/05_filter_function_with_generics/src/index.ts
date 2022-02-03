function filterFor<ArrayType, FuncType>(array: ArrayType[], predicate: (element: ArrayType) => FuncType): ArrayType[] {
  const resultArray = [];

  for (const element of array) {
    if (predicate(element)) {
      resultArray.push(element);
    }
  }

  return resultArray;
}

export { filterFor };
