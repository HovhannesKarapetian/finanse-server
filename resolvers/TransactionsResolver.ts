import { IResolvers } from "apollo-server";
import { TransactionsQuery } from "../queries";
import { TransactionsMutation } from "../mutations";
import { categoryLoader } from "../loaders";

export const TransactionsResolver: IResolvers = {
  Query: TransactionsQuery,
  Mutation: TransactionsMutation,
  Transactions: {
    category: ({ categoryId }) => categoryLoader.load(categoryId),
  },
};
