const program = require("commander");
const {createProjectAction, addComponentAction} = require("./actions");
const createCommond = ()=>{
    program.command("create <project> [others...]")
           .description("volant:Files are being pulled from remote repositories")
           .action((project)=>{
                createProjectAction(project);
           });

    program.command("addComponent <name>")
        .description("add volant component, For Example: volant addComponent HelloWorld -d src/component")
        .action((project)=>{
            addComponentAction(project);
        });
}

module.exports =createCommond;