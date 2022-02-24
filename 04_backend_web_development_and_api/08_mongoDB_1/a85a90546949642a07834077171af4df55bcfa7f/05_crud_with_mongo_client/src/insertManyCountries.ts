import { Db } from "mongodb";

type CountryType = {
  _id: string;
  name: string;
  capital: string;
  continent: string;
};

export async function insertManyCountries(db: Db, myArray: CountryType[]): Promise<number> {
  // code your function here
  const result = await db.collection<CountryType>("worldAtlas").insertMany(myArray);
  return result.insertedCount;
}
