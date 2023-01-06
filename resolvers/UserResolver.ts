import { UserQuery } from '../queries/UserQuery';
import { UserMutation } from '../mutations/UserMutation';

export const UserResolver: any = {
  Query: UserQuery,
  Mutation: UserMutation,
};
