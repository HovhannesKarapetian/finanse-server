import { CategoryMutation } from '../mutations';
import { CategotyQuery } from '../queries';

export const CategoryResolver: any = {
  Query: CategotyQuery,
  Mutation: CategoryMutation,
};
