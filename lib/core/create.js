const program = require("commander");
const {createProjectAction} = require("./actions");
const createCommond = ()=>{
    program.command("create <project> [others...]")
           .description("volant:Files are being pulled from remote repositories")
           .action((project)=>{
                createProjectAction(project);
           });
}

module.exports =createCommond;