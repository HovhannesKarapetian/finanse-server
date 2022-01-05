import { getCategory, getCatgorys } from "../controllers/CategoryController";

export const CategotyQuery = {
  categories: {
    resolve: async (...args) => {
      return await getCatgorys(...args);
    },
  },
  category: {
    resolve: async (parent, args, context, info) => {
      return await getCategory(args.id);
    },
  },
};
