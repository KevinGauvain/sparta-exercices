// write your MongoDB shell command here
import "dotenv/config";
console.log(process.env.MONGODB_DATABASE_URL);

const newCountry = {
  name: "France",
  capital: "Paris",
  continent: "Europe",
};

db.worldAtlas.insertOne(newCountry);

// db.collection("worldAtlas").insertOne(newCountry);
