import { sentenceJoiner } from "./sentenceJoiner";
import { sentenceSplitter } from "./sentenceSplitter";

export const context = (sentence: string): string => {
  // Code your function for context here
  const result1 = sentenceSplitter(sentence);
  console.log("---------lg 7-------", result1);

  function test(word: string): boolean {
    if (word.charAt(0).toLowerCase() === "a") {
      return false;
    } else if (word.charAt(0).toLowerCase() === "e") {
      return false;
    } else if (word.charAt(0).toLowerCase() === "i") {
      return false;
    } else if (word.charAt(0).toLowerCase() === "o") {
      return false;
    } else if (word.charAt(0).toLowerCase() === "u") {
      return false;
    } else if (word.charAt(0).toLowerCase() === "y") {
      return false;
    } else {
      return true;
    }
  }

  const result2 = result1.filter((element) => test(element));
  console.log("-------lg 10-------", result2);

  const result3 = sentenceJoiner(result2);
  console.log("-------lg 13------", result3);

  return result3;
};
