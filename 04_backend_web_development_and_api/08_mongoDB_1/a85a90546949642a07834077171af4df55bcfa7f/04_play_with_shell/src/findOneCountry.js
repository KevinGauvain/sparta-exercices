// write your MongoDB shell command here
import "dotenv/config";
console.log(process.env.MONGODB_DATABASE_URL);

db.worldAtlas.findOne({ name: "Iceland" });
// db.collection("worldAtlas").findOne({ name: "Iceland" });
