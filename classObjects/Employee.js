// Base class object 
class Employee{
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {    
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee"
    }

    getMoreInfo() {
        return ``
    }

    htmlCard() {
        return `<div class="col-4 mt-4"><div class="card h-100"><div class="card-header"><h3>${this.name}</h3><h4>${this.getRole()}</h4></div><div class="card-body"><p class="nid">ID: ${this.id}</p><p class="email">Email: <a href="mailto:${this.email}"></a></p>${this.getMoreInfo()}</div></div></div>`
        
    }
}


module.exports = Employee

