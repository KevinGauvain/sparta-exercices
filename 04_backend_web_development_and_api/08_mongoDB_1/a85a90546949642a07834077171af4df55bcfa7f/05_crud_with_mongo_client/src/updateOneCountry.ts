import { Db, UpdateResult, WithId, Document } from "mongodb";

export function updateOneCountry(db: Db): Promise<WithId<Document>> {
  // code your function here
  db.collection("worldAtlas").findOne({ name: "Australia" });
  db.collection("worldAtlas").updateOne({ name: "Australia" }, { $set: { capital: "Canberra" } });
  return db.collection("worldAtlas").findOne({ capital: "Canberra" });
}
