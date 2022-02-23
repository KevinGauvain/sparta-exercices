// write your MongoDB shell command here
import "dotenv/config";
console.log(process.env.MONGODB_DATABASE_URL);

db.worldAtlas.find({ continent: "Europe" });
// db.collection("worldAtlas").findMany({ continent: "Europe" });
