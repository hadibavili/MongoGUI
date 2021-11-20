const { exec } = require("child_process");

module.exports.runner = command => {
   var spawn = require("child_process").spawn,
      exec = spawn(command);

   exec.stdout.on("data", function (data) {
      console.log("stdout: " + data.toString());
   });

   exec.stderr.on("data", function (data) {
      console.log("stderr: " + data.toString());
   });

   exec.on("exit", function (code) {
      console.log("child process exited with code " + code.toString());
   });
};
