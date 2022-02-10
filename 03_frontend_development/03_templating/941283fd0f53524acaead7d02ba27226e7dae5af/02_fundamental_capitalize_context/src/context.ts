import { capitalize } from "./capitalize";

export function context(sentence: string): string {
  // Code here and use the function `capitalize` from exercise one
  // console.log(sentence.length);
  const splited = sentence.split(" ");
  console.log("----1------", splited);
  const map = splited.map(capitalize);
  console.log("--------2--------", map);
  const result = map.join(" ");
  console.log("----------3-------", result);
  return result;
}
