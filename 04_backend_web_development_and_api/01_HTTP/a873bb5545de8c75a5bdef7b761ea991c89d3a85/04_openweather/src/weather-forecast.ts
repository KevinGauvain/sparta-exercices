import request from "@fewlines-education/request";
import "dotenv/config";

function weatherByZipcode(zipcode: string, countryCode: string): void {
  // code the function here
  request(
    `http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${countryCode}&units=metric&cnt=5&appid=${process.env.OPENWEATHER_API_KEY}`,
    (error, body) => {
      if (error) {
        console.error(error);
      } else {
        // console.log(body);
        const transformed = JSON.parse(body);
        // var js = fichier json mis en objet transformed
        const splited = transformed.list[0].dt_txt.split([" "]);
        const result = {
          date: splited[0],
          hour: splited[1],
          temperature: `${transformed.list[0].main.temp} °C`,
          weather: transformed.list[0].weather[0].description,
        };
        console.log(`Weather for ${transformed.city.name}`, result);
      }
    },
  );
}

// for each ???

weatherByZipcode("59000", "fr");

//function weatherByLatitudeAndLongitude(latitude, longitude) {
// code the function here
//}

// leave lines below for tests to work properly
export { weatherByZipcode /*weatherByLatitudeAndLongitude*/ };
