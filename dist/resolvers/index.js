"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var UserResolver_1 = require("./UserResolver");
var BookResolver_1 = require("./BookResolver");
var Transactions_1 = require("../api/Transactions");
var Category_1 = require("../api/Category");
exports.resolvers = [UserResolver_1.UserResolver, BookResolver_1.BookResolver, Transactions_1.TransactionResolver, Category_1.CategoryResolver];
