import { getCategory } from '../controllers';
import { IResolvers } from 'apollo-server';
import { TransactionsQuery } from '../queries';
import { TransactionsMutation } from '../mutations';

export const TransactionsResolver: IResolvers = {
  Query: TransactionsQuery,
  Mutation: TransactionsMutation,
  Transactions: {
    category(parent) {
      return getCategory(parent.categoryId);
    },
  },
};
