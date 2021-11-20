const { exec } = require("child_process");
const { emit } = require("../socket/socket");
const runner = command => {
   var commandRunner = exec(command);
   commandRunner.stdout.on("data", function (data) {
      emit(data.toString());
   });
};

module.exports = {
   runner,
};
