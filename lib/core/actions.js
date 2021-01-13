const { promisify } = require("util");
const download =  promisify( require("download-git-repo"));
const {vueRepo}  = require("../config/repo-config");

const createProjectAction = async (project)=>{
    await download();
}

module.exports = {
    createProjectAction
}