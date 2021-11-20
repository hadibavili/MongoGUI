const JSONdb = require("simple-json-db");
const { exec } = require("child_process");
const socket = require("../socket/socket");
const { runner, reader } = require("../public/commandRunner");

const resolvers = {
   Query: {
      async installMongo() {
         await runner(`sudo apt-get update`);
         await runner(
            `sudo apt-get install -y mongodb-org=5.0.2 mongodb-org-database=5.0.2 mongodb-org-server=5.0.2 mongodb-org-shell=5.0.2 mongodb-org-mongos=5.0.2 mongodb-org-tools=5.0.2`
         );
         await runner(
            `echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list`
         );
         await runner(`wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
         sudo apt-get update`);
         return true;
      },
      async getSettings() {
         const result = await reader(`sudo cat /etc/mongod.conf`);
         console.log(result);
         return result;
      },
   },
   Mutation: {},
};

module.exports = {
   resolvers,
};
