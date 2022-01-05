import { UserSchema } from './UserSchema';
import { BookSchema } from './BookSchema';
import { DefaultSchema } from './DefaultSchema';
import {  TransactionsSchema } from './TransactionsSchema'
// import { TransactionSchema } from '../api/Transactions';
// import { categorieschema } from '../api/Category';
import { categorieschema } from './categorieschema';
export const schema = [DefaultSchema, UserSchema, BookSchema, categorieschema, TransactionsSchema];
