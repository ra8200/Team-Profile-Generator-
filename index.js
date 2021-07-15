const inquirer = require('inquirer');
const fs = require('fs');

const TOP = fs.readFileSync('./display/top.html');
const BOTTOM = fs.readFileSync('./display/bottom.html');

const Manager = require( "./classObjects/Manager.js")
const Engineer = require("./classObjects/Engineer.js")
const Intern = require("./classObjects/Intern.js")
const managerArray = []
const internArray = []
const engineerArray=[]

function startTeam(){
return inquirer
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
            default:
                return managerArray.concat(engineerArray).concat(internArray);
        }
    })
}
    function getManagerDetails () {
        return inquirer
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
        let myManager = new Manager(response.name, response.id, response.email, response.officeNumber);
        managerArray.push(myManager);
        return startTeam()
    })
    }
    function getEngineerDetails () {
        return inquirer
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
        let myEngineer = new Engineer(response.name, response.id, response.email, response.gitHub);
        engineerArray.push(myEngineer);
        return startTeam()
    })
    }
    function getInternDetails () {
        return inquirer
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
        return startTeam()
    })
    }

    function generateHTML (ta) {
        console.log(managerArray, engineerArray, internArray);
        var cards = ta.map (e => e.htmlCard()).join('\n');
        
        var html = TOP + cards + BOTTOM;
        console.log(`html: ${html}`);
        return html;
    }


    const writeFile = data => {
        try {
        fs.writeFileSync('./display/index.html',data) /*, err => {
            // if there is an error 
            if (err) {
                console.log(err);
                return;
            // when the profile has been created 
            } else {
                console.log("Your team profile has been successfully created! Please check out the index.html")
            }
        })*/
    } catch (err) {
        console.log(err);
    }
    }; 
        startTeam()
      .then(teamArray => {
        return generateHTML(teamArray);
      })
      .then(pageHTML => {
        console.log(`page: ${pageHTML}`);
        return writeFile(pageHTML);
      })
      .then(_ => (process.exit(0)))
      .catch(err => {
     console.log(err);
     process.exit(1)
      });