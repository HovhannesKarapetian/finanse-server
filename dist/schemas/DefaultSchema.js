"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultSchema = void 0;
var apollo_server_1 = require("apollo-server");
/**
 * @description holds default schema
 */
exports.DefaultSchema = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    _empty: String\n  }\n\n  type Mutation {\n    _empty: String\n  }\n"], ["\n  type Query {\n    _empty: String\n  }\n\n  type Mutation {\n    _empty: String\n  }\n"])));
var templateObject_1;
