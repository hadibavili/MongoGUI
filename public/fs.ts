const fs = require("fs");
// Create a writable stream
var writerStream = fs.createWriteStream("../mongod.yml");
// Create a readable stream
var readerStream = fs.createReadStream("../mongod.yml");
readerStream.setEncoding("UTF8");

module.exports.write = (data: string) => {
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

      writerStream.on("error", function (err: any) {
         reject(err.stack);
      });
   });
};
module.exports.read = () => {
   return new Promise((resolve, reject) => {
      var data = "";

      // Handle stream events --> data, end, and error
      readerStream.on("data", function (chunk: any) {
         data += chunk;
      });

      readerStream.on("end", function () {
         resolve(data);
      });

      readerStream.on("error", function (err: any) {
         reject(err.stack);
      });
   });
};
   