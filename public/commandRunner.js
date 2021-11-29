"use strict";
const { exec } = require("child_process");
const { emit } = require("../socket/socket");
module.exports.runner = async (command) => {
    return new Promise(resolve => {
        var commandRunner = exec(command);
        commandRunner.stdout.on("data", function (data) {
            emit(data.toString());
        });
        commandRunner.on("exit", function (data) {
            resolve(true);
        });
    });
};
module.exports.reader = async (command) => {
    return new Promise(resolve => {
        var commandRunner = exec(command);
        commandRunner.stdout.on("data", function (data) {
            resolve(data);
        });
    });
};
