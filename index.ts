import mongoose from "mongoose";
import express from "express";
import { Response } from "express-serve-static-core";
import { getConnection } from "./database/Provider";
import { MONGO_DB_PATH, PORT } from "./contant";
import cors from "cors";



console.log(MONGO_DB_PATH, PORT);

import apolloServer from "./graphql";
console.log(MONGO_DB_PATH);

const app = express();
app.use(cors());

async function green() {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
green();

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/graphql`);
  mongoose.connect(MONGO_DB_PATH);
  console.log("Success");
});
