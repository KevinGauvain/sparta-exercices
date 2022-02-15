import request from "@fewlines-education/request";

function getCategories(): void {
  // code the function here
  request("https://api.chucknorris.io/jokes/categories", (error, body) => {
    if (error) {
      console.error(error);
    } else {
      console.log(body);
    }
    return;
  });
}

// leave line below for tests to work properly
export { getCategories };
