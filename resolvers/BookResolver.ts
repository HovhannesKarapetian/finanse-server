import { BookQuery } from "../queries/BookQuery";
import { BookMutation } from "../mutations/BookMutation";

export const BookResolver: any = {
  Query: BookQuery,
  Mutation: BookMutation,
};
