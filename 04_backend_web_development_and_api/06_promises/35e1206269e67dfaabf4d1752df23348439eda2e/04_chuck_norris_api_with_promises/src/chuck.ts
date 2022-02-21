import fetch from "node-fetch";

function getCategories(): Promise<string[]> {
  // Your code goes here
  return fetch("https://api.chucknorris.io/jokes/categories").then((response) => response.json());
  // .then((result) => result.categories);
}

function getJoke(category: string): Promise<string> {
  // Your code goes here
  return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((response) => response.json())
    .then((result) => result.value);
}

// Leave the line below for tests to work properly
export { getCategories, getJoke };

// function getGamesFromPlatformSlug(platformSlus: string): Promise<Game[]> {
//   return fetch(`https://videogame-api.fly.dev/platforms/slug/${platformSlug}`)
//     .then((response) => response.json())
//     .then((platform) => fetch(`https://videogame-api.fly.dev/games/platforms/${platform.id}`))
//     .then((response) => response.json())
//     .then((result) => result.games);
// }
