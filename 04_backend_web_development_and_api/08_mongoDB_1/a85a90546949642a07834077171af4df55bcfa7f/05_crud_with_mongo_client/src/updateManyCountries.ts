import { Db, WithId, Document } from "mongodb";

export function updateManyCountries(db: Db): Promise<WithId<Document>[]> {
  //   // code your function here
  return db
    .collection("worldAtlas")
    .updateMany({ continent: "Europe" }, { $set: { continent: "EU" } })
    .then(() => {
      return db.collection("worldAtlas").find({ continent: "EU" }).toArray();
    });
}

//   db.collection("worldAtlas").updateMany({ continent: "Europe" }, { $set: { continent: "EU" } });
//   const continentEu = db.collection("worldAtlas").find({ continent: "EU" });
//   const continentEuArray = continentEu.toArray();
//   return continentEuArray;
// }

// export async function updateManyCountries(db: Db): Promise<WithId<Document>[]> {
//   await db.collection("worldAtlas").updateMany({ continent: "Europe" }, { $set: { continent: "EU" } });
//   db.collection("worldAtlas").find({ continent: "EU" }).toArray
// }
