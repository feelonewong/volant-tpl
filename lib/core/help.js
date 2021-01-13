const program = require("commander");

const suggestedOptions = ()=>{
    program.option("-w", "a volant cli");
    program.option("-d --dest <dest>", "a destination folder, eg: -d /src/components");
    program.option("-f --framework", "your framework");
    program.on("--help",function(){
        console.log("");
        console.log("Other:");
        console.log(" other options");
    })
}



module.exports = suggestedOptions;

