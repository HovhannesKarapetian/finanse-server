import mongoose from "mongoose";
import { MONGO_DB_PATH } from "../contant";

let conn: mongoose.Connection | null = null;

export const getConnection = async (): Promise<mongoose.Connection> => {
  if (conn == null) {
    conn = await mongoose.createConnection(MONGO_DB_PATH);
  }
  return conn;
};
