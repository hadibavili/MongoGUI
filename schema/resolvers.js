const Data = require("../DATA.json");

const resolvers = {
    Query: {
      getAllUsers() {
         return Data;
      },
   },
};

module.exports = {
   resolvers,
};
