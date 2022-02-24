import { Db, WithId, Document } from "mongodb";

export function findManyCountries(db: Db): Promise<WithId<Document>[]> {
  // code your function here
  const donnee = db.collection("worldAtlas").find({ continent: "Europe" });
  const result = donnee.toArray();
  return result;
}
