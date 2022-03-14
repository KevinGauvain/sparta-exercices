import { line } from "./line";
import { column } from "./column";

export function rectangle(width: number, height: number): string {
  const longeur = line(width);
  const largeurResult = column(height, longeur);
  return largeurResult;
}
