const Engineer = require("../lib/Engineer");

test("Can instantiate Engineer instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
});

// TESTS FOR SETTERS //
// testing set engineer name
test("can set name via constructor arguments", () => {
    const engineer = new Engineer("Youssef");
    expect(engineer.name).toBe("Youssef");
});

// testing set engineer id
test("can set name id constructor arguments", () => {
    
    const engineer = new Engineer("Youssef", 15);
    expect(engineer.id).toBe(15);
});

// testing set engineer email
test("can set name email constructor arguments", () => {
    const engineer = new Engineer("Youssef", 24, "test@email.com");
    expect(engineer.email).toBe("test@email.com");
});

// TESTS FOR GETTERS //

// testing for getName() engineer
test("can get name via getName()", () => {
    const engineer = new Engineer("Youssef");
    expect(engineer.getName()).toBe(engineer.name);
});

// testing for getId() engineer
test("can get id via getId()", () => {
    const engineer = new Engineer("Youssef", 199);
    expect(engineer.getId()).toBe(engineer.id);
});


// testing for getEmail() engineer
test("can get id via getEmail()", () => {
    const engineer = new Engineer("Youssef", 199, "email@test.com");
    expect(engineer.getEmail()).toBe(engineer.email);
});


// testing for getRole() engineer
test("can get id via getRole()", () => {
    const engineer = new Engineer("Youssef", 199, "email");
    expect(engineer.getRole()).toBe("Engineer");
});