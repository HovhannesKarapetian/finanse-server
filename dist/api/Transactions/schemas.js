"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSchema = void 0;
var apollo_server_1 = require("apollo-server");
exports.TransactionSchema = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Transaction {\n    id: ID!\n    title: String!\n    price: Int!\n    description: String\n    category: Category\n    isArchived: Boolean\n  }\n  input CreateTransactionInput {\n    title: String!\n    price: Int!\n    description: String\n    category: ID!\n  }\n  extend type Query {\n    transactions: [Transaction]\n    transaction(id: String!): Transaction\n  }\n  extend type Mutation {\n    createTransaction(input: CreateTransactionInput!): Transaction\n  }\n"], ["\n  type Transaction {\n    id: ID!\n    title: String!\n    price: Int!\n    description: String\n    category: Category\n    isArchived: Boolean\n  }\n  input CreateTransactionInput {\n    title: String!\n    price: Int!\n    description: String\n    category: ID!\n  }\n  extend type Query {\n    transactions: [Transaction]\n    transaction(id: String!): Transaction\n  }\n  extend type Mutation {\n    createTransaction(input: CreateTransactionInput!): Transaction\n  }\n"])));
var templateObject_1;
