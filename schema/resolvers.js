const JSONdb = require("simple-json-db");
const { exec } = require("child_process");
const socket = require("../socket/socket");
const { runner } = require("../public/commandRunner");

const resolvers = {
   Query: {
      getAllUsers() {
         return {};
      },
      updatePackages() {
         runner(`sudo apt-get update`);
         return true;
      },
      installMongo() {
         runner(
            `sudo apt-get install -y mongodb-org=5.0.2 mongodb-org-database=5.0.2 mongodb-org-server=5.0.2 mongodb-org-shell=5.0.2 mongodb-org-mongos=5.0.2 mongodb-org-tools=5.0.2`
         );
         return true;
      },
      getSettings() {
         runner(`sudo cat /etc/mongod.conf`);
         return true;
      },
   },
   Mutation: {
      installDB() {
         runner(`wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
         sudo apt-get update`);
         return true;
      },
      creatListFile() {
         runner(
            `echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list`
         );
         return true;
      },
   },
};

module.exports = {
   resolvers,
};
