// code here
import { Customer, customers } from "../data/customers";

export function filterByFirstLetter(listofclient: Customer[], letter: string): Customer[] {
  // Code here
  const split = letter.split("");
  const result = [];
  if (split.length === 1) {
    for (let i = 0; i < listofclient.length; i++) {
      const split2 = listofclient[i].last_name.split("");
      if (split2[0] === letter) {
        result.push(listofclient[i]);
      }
    }
  } else {
    return [];
  }
  return result;
}

export function filterByFirstLetterOrdered(listofclient: Customer[], letter: string): Customer[] {
  const test1 = filterByFirstLetter(listofclient, letter);
  const test2 = test1.sort(SortArray);
  //var s = a.sort(SortArray);
  // console.log(s);
  return test2;
}

function SortArray(x: any, y: any) {
  if (x.last_name < y.last_name) {
    return -1;
  }
  if (x.last_name > y.last_name) {
    return 1;
  }
  return 0;
}

console.log(filterByFirstLetterOrdered(customers, "B"));
