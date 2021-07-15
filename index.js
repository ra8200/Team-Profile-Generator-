const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require( "./classObjects/Manager.js")
const Engineer = require("./classObjects/Engineer.js")
const Intern = require("./classObjects/Intern.js")
const managerArray = []
const internArray = []
const engineerArray=[]

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
                return getManagerDetails();
                break;
            case "Engineer":
                return getEngineerDetails();
                break;
            case "Intern":
                return getInternDetails();
                break;
            default:generateHTML();
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
        let myManager = new Manager(response.name, response.id,response.emil,response.officeNumber);
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
        let myEngineer = new Engineer(response.name, response.id,response.emil,response.gitHub);
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
        let myIntern = new Intern(response.name, response.id,response.email,response.school);
        internArray.push(myIntern);
        startTeam()
    })
    }

    function generateHTML () {
        console.log(managerArray, engineerArray, internArray);
        process.
    }



    startTeam()


    const writeFile = data => {
        fs.writeFile('./display/index.html',data, err => {
            // if there is an error 
            if (err) {
                console.log(err);
                return;
            // when the profile has been created 
            } else {
                console.log("Your team profile has been successfully created! Please check out the index.html")
            }
        })
    }; 
    
    startTeam()
      .then(teamArray => {
        return generateHTML(teamArray);
      })
      .then(pageHTML => {
        return writeFile(pageHTML);
      })
      .catch(err => {
     console.log(err);
      });