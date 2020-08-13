"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var resolvers_1 = require("./resolvers");
var schemas_1 = require("./schemas");
var context_1 = require("./context");
/**
 * @description holds and creates apollo server
 */
var apolloServer = new apollo_server_1.ApolloServer({
    typeDefs: schemas_1.schema,
    resolvers: resolvers_1.resolvers,
    context: context_1.context,
    playground: {
        endpoint: "/graphql"
    },
    introspection: true
});
exports.default = apolloServer;
