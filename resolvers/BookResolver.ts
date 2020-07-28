import { BookQuery } from "../queries/BookQuery";
import { BookMutation } from "../mutations/BookMutation";
import { IResolvers } from "apollo-server";



export const BookResolver: IResolvers = {
  Query: BookQuery,
  Mutation: BookMutation
}