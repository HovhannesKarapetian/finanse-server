import { UserQuery } from '../queries/UserQuery';
import { UserMutation } from '../mutations/UserMutation';
import { IResolvers } from 'apollo-server';

export const UserResolver: IResolvers = {
  Query: UserQuery,
  Mutation: UserMutation,
};
