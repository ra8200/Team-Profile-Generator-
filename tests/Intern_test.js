const Intern = require('../classObjects/Intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Razi', 22, 'razi.alawamleh@gmail', 'GaTech');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Razi', 22, 'razi.alawamleh@gmail', 'GaTech');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Razi', 22, 'razi.alawamleh@gmail.com', 'GaTech');

    expect(intern.getRole()).toEqual("Intern");
}); 