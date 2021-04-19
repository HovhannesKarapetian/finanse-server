import { UserSchema } from './UserSchema';
import { BookSchema } from './BookSchema';
import { DefaultSchema } from './DefaultSchema';
// import { TransactionSchema } from '../api/Transactions';
// import { CategorySchema } from '../api/Category';
import { CategorySchema } from './CategorySchema';
export const schema = [DefaultSchema, UserSchema, BookSchema, CategorySchema];
