// import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { schema } from "./schemas";
import { context } from "./context";
import { ApolloServer } from "apollo-server-express";
import { mergeSchemas } from "@graphql-tools/schema";
/**
 * @description holds and creates apollo server
 */

export const schemat = mergeSchemas({
  typeDefs: schema,
  resolvers: resolvers,
});

let withPlayground = {
  playground: undefined,
};

withPlayground.playground = true;

const apolloServer = new ApolloServer({
  schema: schemat,
  context: context,
  introspection: true,
  ...withPlayground,
});

export default apolloServer;
