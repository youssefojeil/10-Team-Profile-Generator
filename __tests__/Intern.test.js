const Intern = require("../lib/Intern");

test("Can instantiate Intern instance", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
});

// TESTS FOR SETTERS //
// testing set intern name
test("can set name via constructor arguments", () => {
    const intern = new Intern("Youssef");
    expect(intern.name).toBe("Youssef");
});

// testing set intern id
test("can set id via constructor arguments", () => { 
    const intern = new Intern("Youssef", 15);
    expect(intern.id).toBe(15);
});

// testing set intern email
test("can set email via constructor arguments", () => {
    const intern = new Intern("Youssef", 24, "test@email.com");
    expect(intern.email).toBe("test@email.com");
});

// testing set intern School
test("can set school via constructor arguments", () => { 
    const intern = new Intern("Youssef", 15, "test@email.com", "UCF");
    expect(intern.school).toBe("UCF");
});

// TESTS FOR GETTERS //
// testing for getName() intern
test("can get name via getName()", () => {
    const intern = new Intern("Youssef");
    expect(intern.getName()).toBe(intern.name);
});

// testing for getId() intern
test("can get id via getId()", () => {
    const intern = new Intern("Youssef", 199);
    expect(intern.getId()).toBe(intern.id);
});

// testing for getEmail() intern
test("can get email via getEmail()", () => {
    const intern = new Intern("Youssef", 199, "email@test.com");
    expect(intern.getEmail()).toBe(intern.email);
});


// testing for getRole() intern
test("can get id via getRole()", () => {
    const intern = new Intern("Youssef", 199, "email");
    expect(intern.getRole()).toBe("Intern");
});


// testing for getSchool() intern
test("can get id via getSchool()", () => {
    const intern = new Intern("Youssef", 199, "email", "UCF");
    expect(intern.getSchool()).toBe("UCF");
});