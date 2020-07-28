import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { getConnection } from './database/Provider';
dotenv.config();

// creating apollo server
import apolloServer from './graphql';

const port: string = process.env.PORT as string;
const uri: string = process.env.MONGO_DB_PATH as string;

// start listening
apolloServer
  .listen(port, () => {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  })
  .then(({ url }) => {
    console.log('Succes');
  })
  .catch((er) => console.log(er));
