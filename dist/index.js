"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
// creating apollo server
var graphql_1 = __importDefault(require("./graphql"));
var port = process.env.PORT;
var uri = process.env.MONGO_DB_PATH;
// start listening
graphql_1.default
    .listen(port, function () {
    mongoose_1.default.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
})
    .then(function (_a) {
    var url = _a.url;
    console.log('Succes');
})
    .catch(function (er) { return console.log(er); });
