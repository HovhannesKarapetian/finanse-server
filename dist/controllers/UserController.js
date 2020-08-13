"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.createUser = exports.getUser = exports.getAllUsers = void 0;
var UserModel_1 = __importDefault(require("../models/UserModel"));
var apollo_server_1 = require("apollo-server");
/**
 *
 * @description holds crud operations for the user entity
 */
/**
 * gets all users
 * @param connection database connection
 * @returns {IUser[]} user list
 */
exports.getAllUsers = function (connection) { return __awaiter(void 0, void 0, void 0, function () {
    var list, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, UserModel_1.default(connection).find()];
            case 1:
                list = _a.sent();
                if (list != null && list.length > 0) {
                    list = list.map(function (u) {
                        return u.transform();
                    });
                }
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error("> getAllUsers error: ", error_1);
                throw new apollo_server_1.ApolloError("Error retrieving all users");
            case 3: return [2 /*return*/, list];
        }
    });
}); };
/**
 * gets user by id
 * @param connection database connection
 * @param id user id
 * @returns {IUser | null} user or null
 */
exports.getUser = function (connection, id) { return __awaiter(void 0, void 0, void 0, function () {
    var user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, UserModel_1.default(connection).findById(id)];
            case 1:
                user = _a.sent();
                if (user != null) {
                    user = user.transform();
                }
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error("> getUser error: ", error_2);
                throw new apollo_server_1.ApolloError("Error retrieving user with id: " + id);
            case 3: return [2 /*return*/, user];
        }
    });
}); };
/**
 * creates user
 * @param connection database connection
 * @param args user
 * @returns {IUser} created user
 */
exports.createUser = function (connection, args) { return __awaiter(void 0, void 0, void 0, function () {
    var createdUser, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, UserModel_1.default(connection).create(args)];
            case 1:
                createdUser = (_a.sent()).transform();
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error("> createUser error: ", error_3);
                throw new apollo_server_1.ApolloError("Error saving user with name: " + args.name);
            case 3: return [2 /*return*/, createdUser];
        }
    });
}); };
/**
 * deletes user
 * @param connection database connection
 * @param id user id
 * @returns {IUser | null} deleted user or null
 */
exports.deleteUser = function (connection, id) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedUser, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, UserModel_1.default(connection).findByIdAndRemove(id)];
            case 1:
                deletedUser = _a.sent();
                if (deletedUser != null) {
                    deletedUser = deletedUser.transform();
                }
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error("> deleteUser error: ", error_4);
                throw new apollo_server_1.ApolloError("Error deleting user with id: " + id);
            case 3: return [2 /*return*/, deletedUser];
        }
    });
}); };
/**
 * updates user
 * @param connection database connection
 * @param args user
 * @returns {IUser | null} updated user or null
 */
exports.updateUser = function (context, args) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedUser, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, UserModel_1.default(context).findByIdAndUpdate(args.id, {
                        name: args.name,
                        email: args.email
                    }, { new: true })];
            case 1:
                updatedUser = _a.sent();
                if (updatedUser != null) {
                    updatedUser = updatedUser.transform();
                }
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.error("> updateUser error: ", error_5);
                throw new apollo_server_1.ApolloError("Error updating user with id: " + args.id);
            case 3: return [2 /*return*/, updatedUser];
        }
    });
}); };
