const JSONdb = require("simple-json-db");
const db = new JSONdb("../DATA.json");
const { exec } = require("child_process");

const resolvers = {
   Query: {
      getAllUsers() {
         return {};
      },
   },
   Mutation: {
      installDB() {
         exec(`wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
         sudo apt-get update
                  `, (error, stdout, stderr) => {
            return stdout;
         });
         
      },
   },
};

module.exports = {
   resolvers,
};
