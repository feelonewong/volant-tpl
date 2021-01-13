#!/usr/bin/env node
const program = require("commander");
const versionOfPackage  = require("./package.json").version;
const suggestedOptions = require("./lib/core/help");

program.version(versionOfPackage);
suggestedOptions();




program.parse(process.argv);
