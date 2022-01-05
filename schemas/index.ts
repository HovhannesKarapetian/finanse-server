import { UserSchema } from "./UserSchema";
import { BookSchema } from "./BookSchema";
import { DefaultSchema } from "./DefaultSchema";
import { TransactionsSchema } from "./TransactionsSchema";
import { CategorySchema } from "./CategorySchema";

export const schema = [
  DefaultSchema,
  UserSchema,
  BookSchema,
  CategorySchema,
  TransactionsSchema,
];
