// using Manager constructor 
const Manager = require('../classObjects/Manager');

// creating manager object  
test('creates a Manager object', () => {
    const manager = new Manager('Razi', 22, 'razi.alawamleh@gmail', 678-267-0123);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Razi', 22, 'razi.alawamleh@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 