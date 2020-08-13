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
exports.updateBook = exports.deleteBook = exports.createBook = exports.getBook = exports.getAllBooks = void 0;
var BookModel_1 = __importDefault(require("../models/BookModel"));
var apollo_server_1 = require("apollo-server");
exports.getAllBooks = function () { return __awaiter(void 0, void 0, void 0, function () {
    var list, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, BookModel_1.default.find()];
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
                console.error('> getAllBooks error: ', error_1);
                throw new apollo_server_1.ApolloError('Error retrieving all books');
            case 3: return [2 /*return*/, list];
        }
    });
}); };
exports.getBook = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var book, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, BookModel_1.default.findById(id)];
            case 1:
                book = _a.sent();
                if (book != null) {
                    book = book.transform();
                }
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error('> getBook error: ', error_2);
                throw new apollo_server_1.ApolloError('Error retrieving book with id: ' + id);
            case 3: return [2 /*return*/, book];
        }
    });
}); };
exports.createBook = function (connection, args) { return __awaiter(void 0, void 0, void 0, function () {
    var createdBook, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, BookModel_1.default.create(args)];
            case 1:
                createdBook = (_a.sent()).transform();
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error('> createBook error: ', error_3);
                throw new apollo_server_1.ApolloError('Error saving book with name: ' + args.name);
            case 3: return [2 /*return*/, createdBook];
        }
    });
}); };
exports.deleteBook = function (connection, id) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedBook, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, BookModel_1.default.findByIdAndRemove(id)];
            case 1:
                deletedBook = _a.sent();
                if (deletedBook != null) {
                    deletedBook = deletedBook.transform();
                }
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error('> deleteBook error: ', error_4);
                throw new apollo_server_1.ApolloError('Error deleting book with id: ' + id);
            case 3: return [2 /*return*/, deletedBook];
        }
    });
}); };
exports.updateBook = function (context, args) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedBook, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, BookModel_1.default.findByIdAndUpdate(args.id, {
                        name: args.name,
                        description: args.description,
                    }, { new: true })];
            case 1:
                updatedBook = _a.sent();
                if (updatedBook != null) {
                    updatedBook = updatedBook.transform();
                }
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.error('> updateBook error: ', error_5);
                throw new apollo_server_1.ApolloError('Error updating book with id: ' + args.id);
            case 3: return [2 /*return*/, updatedBook];
        }
    });
}); };