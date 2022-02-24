import { Db } from "mongodb";
import "dotenv/config";
console.log(process.env.MONGODB_DATABASE_URL);

export async function deleteManyCountries(db: Db): Promise<boolean> {
  // code your function here
  const result = await db.collection("worldAtlas").deleteMany({ continent: "Europe" });
  if (result.deletedCount > 0) {
    return true;
  } else {
    return false;
  }
}
