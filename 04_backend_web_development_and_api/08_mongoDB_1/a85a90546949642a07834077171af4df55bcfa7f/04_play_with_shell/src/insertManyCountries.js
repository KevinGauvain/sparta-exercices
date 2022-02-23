// write your MongoDB shell command here
import "dotenv/config";
console.log(process.env.MONGODB_DATABASE_URL);

const newCountry2 = [
  {
    name: "Luxembourg",
    capital: "Luxembourg-Ville",
    continent: "Europe",
  },
  {
    name: "RépubliqueTchèque",
    capital: "Prague",
    continent: "Europe",
  },
  {
    name: "France",
    capital: "Paris",
    continent: "Europe",
  },
];

// db.worldAtlas.insertMany([Luxembourg, RépubliqueTchèque]);
db.worldAtlas.insertMany(newCountry2);

// const users = [
//   {
//     firstName: "Frida",
//     lastName: "Ewlines",
//   },
//   {
//     firstName: "Felipe",
//     lastName: "Ewlines",
//   },
// ];

// db.collection("users")
//   .insertMany(users)
//   .then(() => client.close());

// db.worldAtlas.insertMany([
//   {
//     name: "Luxembourg",
//     capital: "Luxembourg-Ville",
//     continent: "Europe",
//   },
//   {
//     name: "RépubliqueTchèque",
//     capital: "Prague",
//     continent: "Europe",
//   },
// ]);

// const newCountry = [
//   {
//     name: "Luxembourg",
//     capital: "Luxembourg-Ville",
//     continent: "Europe",
//   },
//   {
//     name: "RépubliqueTchèque",
//     capital: "Prague",
//     continent: "Europe",
//   },
// ];
