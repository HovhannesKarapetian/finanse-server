import { UserResolver } from './UserResolver';
import { BookResolver } from './BookResolver';
import { TransactionResolver } from '../api/Transactions';
import { CategoryResolver } from '../api/Category';


export const resolvers = [UserResolver, BookResolver, TransactionResolver, CategoryResolver];
