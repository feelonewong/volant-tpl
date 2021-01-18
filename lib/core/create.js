const program = require("commander");
const { createProjectAction,
        addComponentAction,
        addPageAction,
        addStoreAction
    } = require("./actions");
const createCommond = ()=>{
    program.command("create <project> [others...]")
           .description("volant:Files are being pulled from remote repositories")
           .action((project)=>{
                createProjectAction(project);
           });

    program.command("addComponent <name>")
        .description("add volant component, For Example: volant addComponent HelloWorld -d src/component")
        .action((name)=>{
            addComponentAction(name,program.dest|| "src/components");
        });

    program.command("addPage <name>")
        .description("add volant component, For Example: volant addComponent HelloWorld -d src/component")
        .action((page)=>{
            addPageAction(page, program.dest||"src/pages");
        });
    program.command("addStore <name>")
        .description("add volant component, For Example: volant addComponent HelloWorld -d src/component")
        .action((store)=>{
            addStoreAction(store, program.dest||"src/store/modules");
        });
}


module.exports =createCommond;