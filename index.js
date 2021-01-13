#!/usr/bin/env node
const program = require("commander");
const suggestedOptions = require("./lib/core/help");
const createCommand = require("./lib/core/create");
const versionOfPackage  = require("./package.json").version;

program.version(versionOfPackage);

//about sugestion
suggestedOptions();

//about terminal command
createCommand();


program.parse(process.argv);
