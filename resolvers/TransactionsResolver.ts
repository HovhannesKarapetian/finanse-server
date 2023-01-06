import { TransactionsQuery } from "../queries";
import { TransactionsMutation } from "../mutations";
import { categoryLoader } from "../loaders";

export const TransactionsResolver: any = {
  Query: TransactionsQuery,
  Mutation: TransactionsMutation,
  Transactions: {
    category: ({ categoryId }) => categoryLoader.load(categoryId),
  },
};
