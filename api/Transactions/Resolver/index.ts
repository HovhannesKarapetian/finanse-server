import { IResolvers } from 'apollo-server';
import { getCategory } from '../../Category/Resolver/controller';
import { TransactionMutation } from './mutations';
import { TransactionQuery } from './queries';

export const TransactionResolver: IResolvers = {
  Query: TransactionQuery,
  Mutation: TransactionMutation,
  Transaction: {
    category: async (parrent) => {
      console.log(parrent);
      return await getCategory(parrent.category);
    },
  },
};
