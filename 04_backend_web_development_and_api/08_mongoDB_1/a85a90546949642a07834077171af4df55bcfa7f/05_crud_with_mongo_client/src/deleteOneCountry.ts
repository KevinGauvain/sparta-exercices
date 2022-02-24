import { Db } from "mongodb";

export async function deleteOneCountry(db: Db): Promise<boolean> {
  // code your function here
  const result = await db.collection("worldAtlas").deleteOne({ name: "France" });
  if (result.deletedCount === 1) {
    return true;
  } else {
    return false;
  }
}
