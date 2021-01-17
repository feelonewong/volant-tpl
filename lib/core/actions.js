const { promisify } = require("util");

const download =  promisify( require("download-git-repo"));
const open = require("open");

const {vueRepo}  = require("../config/repo-config");
const { commandSpawn } = require("../utils/terminal");
const {compile} = require("../utils/utils");

const createProjectAction = async (project)=>{
    console.log("🚀🚀🚀volant is speeding up to help you create your project...");

    //clone project
    await download(vueRepo,project,{clone: true});

    //install project
    const command = process.platform === "win32"?"npm.cmd":"npm";
    await commandSpawn(command,["install"], {cwd:`./${project}`} )


    //run project
    await commandSpawn(command,["run","serve"], {cwd:`./${project}`} )

    //open browser
    //webpack can auto open=> open("http://localhost:8080/")

}

//add component action
const addComponentAction = async (name,dest)=>{
    //first: should have ejs module/template
    //second: run ejs module
    //third: result write to .vue file
    //Fourth:  put some file directory
    const result =  await compile("vue-component.ejs", {name});
    console.log(result);

}

module.exports = {
    createProjectAction,
    addComponentAction
}