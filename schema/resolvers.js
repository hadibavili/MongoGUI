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
      async installDB() {
         console.log("start");
         await exec(
            `wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
         sudo apt-get update`,
            (error, stdout, stderr) => {
               console.log('done')
               return "done"
               return stdout;
            }
         );
      },
   },
};

module.exports = {
   resolvers,
};
