import mongoose from "mongoose";
import express from "express";
import { Response } from "express-serve-static-core";
import { getConnection } from "./database/Provider";
import { MONGO_DB_PATH, PORT } from "./contant";

// export interface Response {
//   locals: Record<any, any>;
// }

console.log(MONGO_DB_PATH, PORT);

// creating apollo server
import apolloServer from "./graphql";

mongoose.set("debug", true);
mongoose.set("strictQuery", false);
console.log(MONGO_DB_PATH);
// start listening
// apolloServer
//   .listen(PORT, () => {
//     mongoose.connect(MONGO_DB_PATH);
//   })
//   .then(({ url }) => {
//     console.log("Success");
//   })
//   .catch((er) => console.log(er));
// import express from 'express'
// import cors from 'cors'
// import { ApolloServer } from 'apollo-server-express'
// import { schema } from './graphql'
// import depthLimit from 'graphql-depth-limit'
// import MongoLib from './mongo'
// import config from './config'

const app = express();
// app.use(cors())

// const server = new ApolloServer({
//   schema,
//   playground: true,
//   introspection: true,
//   context: async () => new MongoLib().connect(),
//   validationRules: [
//     depthLimit(10)
//   ]
// })
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
