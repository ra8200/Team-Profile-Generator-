var inquirer = require("inquirer");
var Manager = "./classObjects/Manager.js"
var Engineer = "./classObjects/Engineer.js"
var Inter = "./classObjects/Inter.js"
var managerArray = []
var interArray = []
var engineerArray=[]

function startTeam(){
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
}
    function getManagerDetails () {
        inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
          
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
          
        },
        {
            type: "input",
            name: "id",
            message: "What is your id?",
          
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?",
          
        }
    ])  .then (response =>{
        var myManager = new Manager(response.name, response.id,response.emil,response.officeNumber);
        managerArray.push(myManager);
        startTeam()
    })
    }
    function getEngineerDetails () {
        inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
          
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
          
        },
        {
            type: "input",
            name: "id",
            message: "What is your id?",
          
        },
        {
            type: "input",
            name: "gitHub",
            message: "What is your GitHub username?",
          
        }
    ])  .then (response =>{
        var myEngineer = new Engineer(response.name, response.id,response.emil,response.gitHub);
        engineerArray.push(myEngineer);
        startTeam()
    })
    }
    function getInternDetails () {
        inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
          
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
          
        },
        {
            type: "input",
            name: "id",
            message: "What is your id?",
          
        },
        {
            type: "input",
            name: "school",
            message: "What is your school?",
          
        }
    ])  .then (response =>{
        var myIntern = new Intern(response.name, response.id,response.email,response.school);
        managerArray.push(myIntern);
        startTeam()
    })
    }



    startTeam()