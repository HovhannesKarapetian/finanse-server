import { createCategory } from '../controllers';

export const CategoryMutation = {
  createCategory: {
    resolve: async (parent, args, context, info) => {
      return await createCategory(args.input);
    },
  },
};
