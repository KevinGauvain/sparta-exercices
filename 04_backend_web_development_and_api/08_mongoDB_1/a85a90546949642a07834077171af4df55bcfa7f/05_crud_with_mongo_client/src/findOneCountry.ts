import { Db, WithId, Document, FindCursor } from "mongodb";
import { StringifyOptions } from "querystring";

// import "dotenv/config";
// console.log(process.env.MONGODB_DATABASE_URL);

// const newCountry = {
//   name: "France",
//   capital: "Paris",
//   continent: "Europe",
// };

type Country = {
  name: string;
  capital: string;
  continent: string;
};

export function findOneCountry(db: Db): Promise<WithId<Document>> {
  // code your function here
  return db.collection("worldAtlas").findOne({ name: "Iceland" });
  // .then((result) => {
  //   // console.log(result);
  //   const myCountry: Country = {
  //     name: result.name,
  //     capital: result.capital,
  //     continent: result.continent,
  //   };
  //   return myCountry;
  // });
  // db.collection("worldAtlas").insertOne(country)
}

//-------------------------------- MARTIN -----------------------------------------------
// export function findOneCountry(db: Db): Promise<Country> {
//   // code your function here
//   return db
//     .collection("worldAtlas")
//     .findOne({ name: "Iceland" })
//     .then((result) => {
//       // console.log(result);
//       const myCountry: Country = {
//         name: result.name,
//         capital: result.capital,
//         continent: result.continent,
//       };
//       return myCountry;
//     });
//   // db.collection("worldAtlas").insertOne(country)
// }
//----------------------------------------------------------------------------------------

// export function findOneCountry(db: Db): FindCursor<WithId<Document>> {
//   // code your function here
//   return db.collection("worldAtlas").find({ name: "Iceland" });
// }

// -----------------------------------------------------------
// export function findOneCountry(db: Db): string[] {
//   // code your function here
//   db.collection("worldAtlas")
//   .find({ name: "Iceland" })
//   .toArray()
//   .then((docs) => {
//     console.log(docs);
//     return;
//   });
//   return;
// }

// export function findOneCountry(db: Db, country: string): Promise<Document> {
//   // code your function here
//   db.collection("worldAtlas")
//     .findOne({ name: country })
//     // .toArray()
//     .then((result) => {
//       return result;
//     });
//   return;
// }

// export async function findOneCountry(db: Db, country: string): Promise<Document> {
//   // code your function here
//   await db.collection("worldAtlas")
//     .findOne({ name: country })
//     // .toArray()
//     .then((result) => {
//       return result;
//     });
//   return;
// }

// export function findOneCountry(db: Db, country: string) {
//   // code your function here
//   db.collection("worldAtlas").findOne({ name: country });
//   // .toArray()
//   // .then((result) => {
//   //   return result;
//   // });
// }

// export function findOneCountry(db: Db) {
//   // code your function here
//   db.collection("worldAtlas")
//     .find({ name: "Iceland" })
//     .toArray()
//     .then((country) => {
//       return country;
//     });
//   return;
// }
