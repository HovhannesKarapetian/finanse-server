"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
var apollo_server_1 = require("apollo-server");
/**
 * @description holds book schema
 */
exports.BookSchema = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Book {\n    id: ID!,\n    name: String!,\n    description: String!\n  } \n\n  input CreateBookInput {\n    name: String!,\n    description: String!\n  }\n\n  input UpdateBookInput {\n    id: String!,\n    name: String!,\n    description: String!\n  }\n  \n  extend type Query {\n    books: [Book]\n    book(id: String!): Book\n  }\n\n  extend type Mutation {\n    createBook(input: CreateBookInput!): Book\n    updateBook(input: UpdateBookInput!): Book\n    deleteBook(id: String!): Book\n  }\n"], ["\n  type Book {\n    id: ID!,\n    name: String!,\n    description: String!\n  } \n\n  input CreateBookInput {\n    name: String!,\n    description: String!\n  }\n\n  input UpdateBookInput {\n    id: String!,\n    name: String!,\n    description: String!\n  }\n  \n  extend type Query {\n    books: [Book]\n    book(id: String!): Book\n  }\n\n  extend type Mutation {\n    createBook(input: CreateBookInput!): Book\n    updateBook(input: UpdateBookInput!): Book\n    deleteBook(id: String!): Book\n  }\n"])));
var templateObject_1;
