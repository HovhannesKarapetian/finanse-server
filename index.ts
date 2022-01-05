import mongoose from "mongoose";
import { getConnection } from "./database/Provider";
import { MONGO_DB_PATH, PORT } from "./contant";

console.log(MONGO_DB_PATH, PORT);

// creating apollo server
import apolloServer from "./graphql";

mongoose.set('debug', true);
// start listening
apolloServer
  .listen(PORT, () => {
    mongoose.connect(MONGO_DB_PATH, {
      
      logger : console,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  })
  .then(({ url }) => {
    console.log("Success");
  })
  .catch((er) => console.log(er));
