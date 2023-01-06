// import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { schema } from "./schemas";
import { context } from "./context";
import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
/**
 * @description holds and creates apollo server
 */

export const schemat = makeExecutableSchema({
  typeDefs: schema,
  resolvers: resolvers,
});

const apolloServer = new ApolloServer({
  schema: schemat,
  context: context,
  introspection: true,
});

export default apolloServer;
