const Engineer = require('../classObjects/Engineer');

// creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Razi', 22, 'razi.alawamleh@gmail', 'ra8200');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Razi', 22, 'razi.alawamleh@gmail', 'ra8200');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Razi', 22, 'razi.alawamleh@gmail', 'ra8200');

    expect(engineer.getRole()).toEqual("Engineer");
});
© 2021 GitHub, Inc.