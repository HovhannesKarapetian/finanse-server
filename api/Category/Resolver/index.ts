import { IResolvers } from 'apollo-server';
import { CategoryMutation } from './mutations';
import { CategoryQuery } from './queries';

export const CategoryResolver: IResolvers = {
  Query: CategoryQuery,
  Mutation: CategoryMutation,
};
