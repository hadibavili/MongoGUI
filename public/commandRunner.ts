const { exec } = require("child_process");
const { emit } = require("../socket/socket");
module.exports.runner = async (command: string) => {
   return new Promise(resolve => {
      var commandRunner = exec(command);

      commandRunner.stdout.on("data", function (data: string) {
         emit(data.toString());
      });

      commandRunner.on("exit", function (data: string) {
         resolve(true);
      });
   });
};

module.exports.reader = async (command: string) => {
   return new Promise(resolve => {
      var commandRunner = exec(command);
      commandRunner.stdout.on("data", function (data: string) {
         resolve(data);
      });
   });
};
