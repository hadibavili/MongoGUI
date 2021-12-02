"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONdb = require("simple-json-db");
const { exec } = require("child_process");
const socket = require("../socket/socket");
const { runner, reader } = require("../public/commandRunner");
const yaml = require("js-yaml");
const fs = require("fs");
const { write, read } = require("../public/fs");
var YAML = require("json2yaml"), ymlText;
exports.resolvers = {
    Query: {
        async installMongo() {
            await runner(`sudo apt-get update`);
            await runner(`sudo apt-get install -y mongodb-org=5.0.2 mongodb-org-database=5.0.2 mongodb-org-server=5.0.2 mongodb-org-shell=5.0.2 mongodb-org-mongos=5.0.2 mongodb-org-tools=5.0.2`);
            await runner(`echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list`);
            await runner(`wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
         sudo apt-get update`);
            return true;
        },
        async getSettings() {
            const result = await reader(`sudo cat /etc/mongod.conf`);
            const action = await write(result);
            const data = await read();
            return JSON.stringify(data);
        },
<<<<<<< HEAD
        getSettings() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(1)
                const doc = yaml.load(fs.readFileSync("../mongod", "utf8"));
                console.log(doc);
            });
=======
    },
    Mutation: {
        async updateSetting(_, { data }) {
            ymlText = YAML.stringify(JSON.parse(data));
            const action = await write(ymlText);
            return action;
>>>>>>> 267f7f824e6b752e8b82984b3a0bf5338cf00680
        },
    },
};
