"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
var UserSchema_1 = require("./UserSchema");
var BookSchema_1 = require("./BookSchema");
var DefaultSchema_1 = require("./DefaultSchema");
var Transactions_1 = require("../api/Transactions");
var Category_1 = require("../api/Category");
exports.schema = [DefaultSchema_1.DefaultSchema, UserSchema_1.UserSchema, BookSchema_1.BookSchema, Transactions_1.TransactionSchema, Category_1.CategorySchema];
