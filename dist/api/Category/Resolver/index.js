"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryResolver = void 0;
var mutations_1 = require("./mutations");
var queries_1 = require("./queries");
exports.CategoryResolver = {
    Query: queries_1.CategoryQuery,
    Mutation: mutations_1.CategoryMutation,
};
