import { createCategory, updateCategory } from '../controllers';

export const CategoryMutation = {
  createCategory: {
    resolve: async (parent, args, context, info) => {
      return await createCategory(args.input);
    },
  },
  updateCategory: {
    resolve: async (parent, args, context, info) => {
      console.log('start greenviche')
      return await updateCategory(args.input.id, args.input);
    },
  },
};
