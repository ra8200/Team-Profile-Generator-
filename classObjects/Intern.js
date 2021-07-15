const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    }
    getRole(){
        return "Intern"
    }
    getSchool(){
        return this.school;
    }
    getMoreInfo() {
        return `<p class="school">School: ${this.school}</p>`
    }
}

module.exports = Intern
