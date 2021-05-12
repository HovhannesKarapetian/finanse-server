import { getCategory, getCatgorys } from '../controllers/CategoryController';

export const CategotyQuery = {
  categorys: {
    resolve: async (parent, args, context, info) => {
      return await getCatgorys();
    },
  },
  category: {
    resolve: async (parent, args, context, info) => {
      return await getCategory(args.id);
    },
  },
};
