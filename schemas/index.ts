import { UserSchema } from './UserSchema';
import { BookSchema } from './BookSchema';
import { DefaultSchema } from './DefaultSchema';
import { TransactionSchema } from '../api/Transactions';
import { CategorySchema } from '../api/Category';

export const schema = [DefaultSchema, UserSchema, BookSchema, TransactionSchema, CategorySchema];
