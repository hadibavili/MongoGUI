let ioNew = require("../index");

module.exports.listen = (ioObj: any) => {
   ioNew = ioObj;
   ioNew.on("connection", (socket: object) => {
      console.log("client connected");
   });
};

module.exports.emit = (data: string) => {
   ioNew.emit("log", data);
};
