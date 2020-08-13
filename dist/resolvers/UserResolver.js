"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
var UserQuery_1 = require("../queries/UserQuery");
var UserMutation_1 = require("../mutations/UserMutation");
/**
 * @description holds user resolver
 */
exports.UserResolver = {
    Query: UserQuery_1.UserQuery,
    Mutation: UserMutation_1.UserMutation
};
