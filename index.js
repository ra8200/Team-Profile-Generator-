var inquirer = require("inquirer");
var Manager = "./classObjects/Manager.js"
var Engineer = "./classObjects/Engineer.js"
var Inter = "./classObjects/Inter.js"

inquirer
    .prompt([
        {
            type: "list",
            name: "name",
            message: "What is your position?",
            choices: ['Manager', 'Engineer', 'Intern', 'Exit Application']
        }


    ]).then(function(response){
        switch(response.name) {
            case "Manager":
                getManagerDetails();
                break;
            case "Engineer":
                getEnginnerDetails();
                break;
            case "Intern":
                getInternDetails();
                break;
            default: process.exit(0);
        }
    })