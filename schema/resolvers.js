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
         // return new Promise(resolve => {
         //    var q = exec(`sudo apt-get update`, (error, stdout, stderr) => {
         //       resolve(stdout);
         //    });
         // });
      },
      installMongo() {
         return new Promise(resolve => {
            var q = exec(
               `sudo apt-get install -y mongodb-org=5.0.2 mongodb-org-database=5.0.2 mongodb-org-server=5.0.2 mongodb-org-shell=5.0.2 mongodb-org-mongos=5.0.2 mongodb-org-tools=5.0.2`,
               (error, stdout, stderr) => {
                  resolve(stdout);
               }
            );
            q.stdout.on("data", function (data) {
               console.log("stdout: " + data.toString());
            });
         });
      },
      getSettings() {
         return new Promise(resolve => {
            var q = exec(
               `sudo cat /etc/mongod.conf`,
               (error, stdout, stderr) => {
                  resolve(stdout);
               }
            );
            q.stdout.on("data", function (data) {
               console.log("stdout: " + data.toString());
            });
         });
      },
   },
   Mutation: {
      installDB() {
         return new Promise(resolve => {
            exec(
               `wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
            sudo apt-get update`,
               (error, stdout, stderr) => {
                  resolve(stdout);
               }
            );
         });
      },
      creatListFile() {
         return new Promise(resolve => {
            var q = exec(
               `echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list`,
               (error, stdout, stderr) => {
                  resolve(stdout);
               }
            );
            q.stdout.on("data", function (data) {
               console.log("stdout: " + data.toString());
            });
         });
      },
   },
};

module.exports = {
   resolvers,
};
