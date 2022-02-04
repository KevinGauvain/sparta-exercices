export function toWords(sentence: string): string[] {
  const allWords = sentence.split(/[.!, :]+/);

  return allWords.filter((word) => word !== "");
}

console.log(toWords("TroTro@- - est; meilleur que PepaPig!"));
console.log(toWords("Test: on essaie que virgule, soit : supprimer. C'est parti"));

/*
export function toWords(sentence: string): string[] {
  const allWords = sentence.split(/[.!, :]+/);

  return allWords.filter((word) => word !== " ");
}
*/
