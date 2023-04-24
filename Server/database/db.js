import mongoose from "mongoose";
import dotenv from  "dotenv";

dotenv.config();

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

const connection = async () => {
  const URL =
    `mongodb://${username}:${password}@ac-6azqlrs-shard-00-00.baamfyo.mongodb.net:27017,ac-6azqlrs-shard-00-01.baamfyo.mongodb.net:27017,ac-6azqlrs-shard-00-02.baamfyo.mongodb.net:27017/?ssl=true&replicaSet=atlas-akdxqu-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("database connected");
  } catch (error) {
    console.log("error while connecting", error.message);
  }
};


export default connection;