import request from "@fewlines-education/request";
import "dotenv/config";

function weatherByCity(city: string) {
  // code the function here

  request(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`,
    (error, body) => {
      if (error) {
        console.error(error);
      } else {
        // console.log(body);
        const js = JSON.parse(body);
        // var js = fichier json mis en objet js
        console.log(js.main.temp);
      }
    },
  );
}

weatherByCity("Lille");

console.log("-test------", process.env.OPENWEATHER_API_KEY);

// leave lines below for tests to work properly
export { weatherByCity };

// https://openweathermap.org/api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
