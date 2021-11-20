let io;

module.exports.listen = ioObj => {
   io = ioObj;

   io.on("connection", socket => {
      console.log("client connected");
   });
};

module.exports.emit = data => {
   io.emit("log", data);
};
