import { Game } from "./types";

export function filterGameByPlatform(games: Game[], platform: string): Game[] {
  const result = games.filter((element) => element.platform === platform);
  return result;
}
