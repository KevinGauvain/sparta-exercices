export function capitalize(word: string): string {
  // Code your function here
  const result = word[0].toUpperCase() + word.slice(1);
  return result;
}
