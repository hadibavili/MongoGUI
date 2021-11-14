const JSONdb = require("simple-json-db");
const db = new JSONdb("../DATA.json");
const { exec } = require("child_process");

const resolvers = {
   Query: {
      getAllUsers() {
         return {};
      },
      updatePackages() {
         return new Promise(resolve => {
            exec(
               `sudo apt-get update`,
               (error, stdout, stderr) => {
                  resolve(stdout);
               }
            );
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
            exec(
               `echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list`,
               (error, stdout, stderr) => {
                  resolve(stdout);
               }
            );
         });
      },
   },
};

module.exports = {
   resolvers,
};
