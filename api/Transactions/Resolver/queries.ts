import { getCategory } from '../../Category/Resolver/controller';
import { TransactionModel } from './../model';
import { getAllTransaction, getTransaction } from './controller';

export const TransactionQuery = {
  transaction: {
    resolve: async (parent, args, context, info) => await getTransaction(args.id),
  },
  transactions: {
    resolve: async (parent, args, context, info) => {
      return await getAllTransaction();
    },
  },
 
};
