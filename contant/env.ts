import dotenv from 'dotenv';
dotenv.config();

export const PORT: any = process.env.PORT || 4000;
export const MONGO_DB_PATH: string = process.env.MONGODB_URI as string;
