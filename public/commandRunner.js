"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { exec } = require("child_process");
const { emit } = require("../socket/socket");
module.exports.runner = (command) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise(resolve => {
        var commandRunner = exec(command);
        commandRunner.stdout.on("data", function (data) {
            emit(data.toString());
        });
        commandRunner.on("exit", function (data) {
            resolve(true);
        });
    });
});
module.exports.reader = (command) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise(resolve => {
        var commandRunner = exec(command);
        commandRunner.stdout.on("data", function (data) {
            resolve(data);
        });
    });
});
