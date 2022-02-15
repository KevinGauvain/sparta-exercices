import request from "@fewlines-education/request";

//const test = getCategories();

function getChuckNorrisJoke(test: string): void {
  // code the function here
  request(`https://api.chucknorris.io/jokes/random?category=${test}`, (error, body) => {
    if (error) {
      console.error(error);
    } else {
      const js = JSON.parse(body);
      // var js = fichier json mis en objet js
      console.log(js);
    }
  });
}

// leave line below for tests to work properly
export { getChuckNorrisJoke };

/*
import request from "@fewlines-education/request";

request("https://api.chucknorris.io/jokes/categories", (error, body) => {
  const data = JSON.parse(body);
  console.log(data);
});
*/
