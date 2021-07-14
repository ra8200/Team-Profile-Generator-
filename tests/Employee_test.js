// Test for Employee Object
// requiring the Employee.js file
const Employee = require('../classObjects/Employee');

// creates employee object 
test('creates an employee object', () => {
    const employee = new Employee('Razi', 22, 'razi.alawamleh@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(email));
});

// gets id from getName() 
test('gets employee name', () => {
    const employee = new Employee('Razi', 22, 'razi.alawamleh@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// Gets id from getId() 
test('Gets employee ID', () => {
    const employee = new Employee('Razi', 22, 'razi.alawamleh@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// Gets emails from getEmail()
test('Gets employee email', () => {
    const employee = new Employee('Razi', 22, 'razi.alawamleh@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Gets role from getRole()
test('Gets role of employee', () => {
    const employee = new Employee('Razi', 22, 'razi.alawamleh@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 