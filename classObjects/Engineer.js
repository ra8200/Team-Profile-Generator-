const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name,id,email,gitHub){
        super(name,id, email)
        this.github = github;
    }
    getRole(){
        return "Engineer"
    }
    getGithub(){
        return this.getGithub;
    }
}

module.exports = Engineer
