"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookResolver = void 0;
var BookQuery_1 = require("../queries/BookQuery");
var BookMutation_1 = require("../mutations/BookMutation");
exports.BookResolver = {
    Query: BookQuery_1.BookQuery,
    Mutation: BookMutation_1.BookMutation
};
