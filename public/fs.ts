const fs = require("fs");
// Create a writable stream
var writerStream = fs.createWriteStream("./mongod.yml");
// Create a readable stream
var readerStream = fs.createReadStream("./mongod.yml");
readerStream.setEncoding("UTF8");
const yaml = require("js-yaml");

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
      const doc = yaml.load(fs.readFileSync('./mongod.yml', 'utf8'));
      resolve(doc)
   });
};
