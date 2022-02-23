import fetch, { Response } from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export type GitHub = {
  message: string;
  repos_url: string;
};

//--------bon (sans error)-----------------------------------------------------

// const response = await fetch(`https://api.github.com/users/${nickname}`);
// const users = await response.json();
// console.log(users);
// const url = await users.repos_url;
// console.log(url);
// return url;
// };

//-----------------------------------------------------------------------------

export const getReposUrl = async (nickname: string): Promise<string | GitHub> => {
  // Code here
  const response = await fetch(`https://api.github.com/users/${nickname}`);
  const users = await response.json();
  console.log(users);
  if (users.message === "Not Found") {
    throw new Error("This User doesn't exist");
  } else {
    const url = users.repos_url;
    console.log(url);
    return url;
  }
};

// -----------------brouillon-----------------------------------------------------

//   const response = await fetch(`https://api.github.com/users/${nickname}`);
//   const users = await response.json();
//   console.log(users);
//   if (users) {
//     const url = await users.repos_url;
//     console.log(url);
//     return url;
//   } else {
//     throw new Error("This user doesn't exist");
//   }
// };

//   return new Promise((resolve, reject) => {
//     if (typeof nickname === "string") {
//       const response = await fetch(`https://api.github.com/users/${nickname}`);
//       const result = await response.json();
//       const url = await result.url;
//       console.log(result);
//       resolve(url);
//     } else {
//       throw new Error("Error");
//     }
//   });
// };

//   return new Promise((resolve, reject) => {
//     const response = await fetch(`https://api.github.com/users/${nickname}`);
//     const result = await response.json();
//     const url = await result.url;
//     console.log(result);
//     resolve(url);
//   });
// };
// };

//   const response = await fetch(`https://api.github.com/users/${nickname}`);
//   const users = await response.json();
//   console.log(users);
//   const url = await users.url;
//   console.log(url);
//   return url;
// };

//   return fetch(`https://api.github.com/users/${nickname}`)
//     .then((response) => response.json())
//     .then((result) => result.url)
//     .then((result) => {
//       console.log(result);
//       return result;
//     });
// };

// try {
//   const response = await fetch(`https://api.github.com/users/${nickname}`);
//   console.log(response);
//   const users = await response.json();
//   console.log(users.url);
//   return users.url;
// } catch (error) {
//   throw new Error("Error");
// }
// };
// return fetch(`https://api.github.com/users/${nickname}`).then((response) => response.json());
// const result =  fetch(`https://api.github.com/users/${nickname}`)

export const getRepos = async (myUrl: string): Promise<string[] | GitHub> => {
  // Code here
  const response = await fetch(`${myUrl}`);
  const repos = await response.json();
  return repos;
};

export const printRepos = async (myRepoArray: string[]): Promise<string[] | GitHub> => {
  // Code here
  for (let i = 1; i < myRepoArray.length; i++) {
    const place = myRepoArray.indexOf(`${i}`);
    console.log(`- ${place}- ${myRepoArray[i]}`);
  }
  return myRepoArray;
};

export const printRepository = () => {
  // Code here
};

export const getProjectInformations = async (myUrl: string): Promise<string[] | GitHub> => {
  // Code here
  const response = await fetch(`${myUrl}`);
  const repos = await response.json();
  return repos;
};
