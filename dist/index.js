"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MessageApi = require("./apis/Message");
const $Bot = require("./Bot");
const $Botable = require("./Botable");
const $Sayable = require("./Sayable");
exports.Api = Object.assign({}, MessageApi);
exports.Bot = Object.assign(Object.assign(Object.assign({}, $Bot), $Botable), $Sayable);
