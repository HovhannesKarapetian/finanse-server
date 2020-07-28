import mongoose from 'mongoose';

/**
 * @description holds database connection provider
 */

// connection uri
const uri: string = 'mongodb+srv://dbUser:dbUser@perfin.ijbvv.mongodb.net/test?retryWrites=true&w=majority';

// mongoose connection
let conn: mongoose.Connection | null = null;

/**
 * creates database connection
 * @returns mongodb connection
 */
export const getConnection = async (): Promise<mongoose.Connection> => {
  if (conn == null) {
    conn = await mongoose.createConnection(uri, {
      bufferCommands: false,
      bufferMaxEntries: 0,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  }
  return conn;
};
