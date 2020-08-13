"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
var apollo_server_1 = require("apollo-server");
/**
 * @description holds user schema
 */
exports.UserSchema = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    id: ID!,\n    name: String!,\n    password: String!,\n    email: String!\n  }\n\n  input CreateUserInput {\n    name: String!,\n    password: String!,\n    email: String!\n  }\n\n  input UpdateUserInput {\n    id: String!,\n    name: String!,\n    email: String!\n  }\n  \n  extend type Query {\n    users: [User]\n    user(id: String!): User\n  }\n\n  extend type Mutation {\n    createUser(input: CreateUserInput!): User\n    updateUser(input: UpdateUserInput!): User\n    deleteUser(id: String!): User\n  }\n"], ["\n  type User {\n    id: ID!,\n    name: String!,\n    password: String!,\n    email: String!\n  }\n\n  input CreateUserInput {\n    name: String!,\n    password: String!,\n    email: String!\n  }\n\n  input UpdateUserInput {\n    id: String!,\n    name: String!,\n    email: String!\n  }\n  \n  extend type Query {\n    users: [User]\n    user(id: String!): User\n  }\n\n  extend type Mutation {\n    createUser(input: CreateUserInput!): User\n    updateUser(input: UpdateUserInput!): User\n    deleteUser(id: String!): User\n  }\n"])));
var templateObject_1;
