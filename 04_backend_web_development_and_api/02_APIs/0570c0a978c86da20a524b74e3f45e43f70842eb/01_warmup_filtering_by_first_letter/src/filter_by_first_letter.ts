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

// console.log(filterByFirstLetter(customers, "B"));
