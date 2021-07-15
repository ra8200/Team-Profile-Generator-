const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager"
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getMoreInfo() {
        retun `<p class="office">Office Number: ${this.officeNumber}</p>`
    }
}
module.exports = Manager
