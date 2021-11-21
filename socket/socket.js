"use strict";
let ioNew = require("../index");
module.exports.listen = (ioObj) => {
    ioNew = ioObj;
    ioNew.on("connection", (socket) => {
        console.log("client connected");
    });
};
module.exports.emit = (data) => {
    ioNew.emit("log", data);
};
