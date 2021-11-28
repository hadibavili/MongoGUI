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
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const JSONdb = require("simple-json-db");
const { exec } = require("child_process");
const socket = require("../socket/socket");
const { runner, reader } = require("../public/commandRunner");
const yaml = require("js-yaml");
const fs = require("fs");
const { write } = require("../public/fs");
exports.resolvers = {
    Query: {
        installMongo() {
            return __awaiter(this, void 0, void 0, function* () {
                yield runner(`sudo apt-get update`);
                yield runner(`sudo apt-get install -y mongodb-org=5.0.2 mongodb-org-database=5.0.2 mongodb-org-server=5.0.2 mongodb-org-shell=5.0.2 mongodb-org-mongos=5.0.2 mongodb-org-tools=5.0.2`);
                yield runner(`echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list`);
                yield runner(`wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
         sudo apt-get update`);
                return true;
            });
        },
        getSettings() {
            return __awaiter(this, void 0, void 0, function* () {
                const result = yield reader(`sudo cat /etc/mongod.conf`);
                const action = yield write(result);
                const doc = yaml.load(fs.readFileSync("../mongod.yml", "utf8"));
                console.log(action);
                console.log(doc);
                return result;
            });
        },
    },
    Mutation: {},
};
