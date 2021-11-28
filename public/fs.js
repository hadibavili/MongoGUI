"use strict";
const fs = require("fs");
// Create a writable stream
var writerStream = fs.createWriteStream("../mongod.yml");
module.exports.write = (data) => {
    return new Promise((resolve, reject) => {
        // Write the data to stream with encoding to be utf8
        writerStream.write(data, "UTF8");
        // Mark the end of file
        writerStream.end();
        // Handle stream events --> finish, and error
        writerStream.on("finish", function () {
            console.log("Write completed.");
            resolve(true);
        });
        writerStream.on("error", function (err) {
            reject(err.stack);
        });
    });
};
