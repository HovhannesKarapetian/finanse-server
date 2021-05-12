import { createTransactions, updateTransactions } from '../controllers';

export const TransactionsMutation = {
  createTransactions: {
    resolve: async (parent, args, context, info) => {
      return await createTransactions(args.input);
    },
  },
  updateTransactions: {
    resolve: async (parent, args, context, info) => {
      return await updateTransactions(args.input.id, args.input);
    },
  },
};
