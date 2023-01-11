import mongoose from "mongoose";
import express from "express";
import { Response } from "express-serve-static-core";
import { getConnection } from "./database/Provider";
import { MONGO_DB_PATH, PORT } from "./contant";
import cors from "cors";
import apolloServer from "./graphql";

console.log(MONGO_DB_PATH, PORT);
const server = apolloServer;
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
mongoose.set("strictQuery", false);

mongoose
  .connect(MONGO_DB_PATH)
  .then(() => {
    console.log("success mongoose");
  })
  .catch((e) => {
    console.log("Error mongoose");
    console.log(e);
  });

async function green() {
  try {
    await server.start();
    // await getConnection();
    server.applyMiddleware({ app });
    console.log("Success Connection");
    console.log("Success Connection", MONGO_DB_PATH);
  } catch (e) {
    console.log(e);
    console.log("Error Confection MongoDb");
  }
}
green();
app.listen(PORT, async () => {
  console.log("Success Connection");
  console.log("Success Connection", MONGO_DB_PATH);
});
