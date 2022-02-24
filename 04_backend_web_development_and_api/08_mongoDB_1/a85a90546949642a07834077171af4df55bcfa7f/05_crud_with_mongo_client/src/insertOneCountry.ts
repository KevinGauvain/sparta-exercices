import { Db } from "mongodb";

type CountryType = {
  _id: string;
  name: string;
  capital: string;
  continent: string;
};

export async function insertOneCountry(db: Db, pays: CountryType): Promise<string> {
  const result = await db.collection<CountryType>("worldAtlas").insertOne(pays);
  return result.insertedId;
}
