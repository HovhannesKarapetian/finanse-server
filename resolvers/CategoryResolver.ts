import { CategoryMutation } from '../mutations';
import { CategotyQuery } from '../queries';
import { IResolvers } from 'apollo-server';

export const CategoryResolver: IResolvers = {
  Query: CategotyQuery,
  Mutation: CategoryMutation,
};
