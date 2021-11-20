const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schema/typeDefs");
const { resolvers } = require("./schema/resolvers");

const express = require("express");
const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
   console.log("server running on 4000");
});



const serverHttp = require("http").createServer(app);
const io = require("socket.io")(serverHttp, {
   cors: {
      origin: "*",
   },
});

const socket = require("./socket/socket");
socket.listen(io);
serverHttp.listen(3000);

module.exports = {
   io,
};
