const Manager = require("../lib/Manager");

test("Can instantiate Manager instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
});

// TESTS FOR SETTERS //
// testing set manager name
test("can set name via constructor arguments", () => {
    const manager = new Manager("Youssef");
    expect(manager.name).toBe("Youssef");
});

// testing set manager id
test("can set name id constructor arguments", () => {
    
    const manager = new Manager("Youssef", 15);
    expect(manager.id).toBe(15);
});

// testing set manager email
test("can set name email constructor arguments", () => {
    const manager = new Manager("Youssef", 24, "test@email.com");
    expect(manager.email).toBe("test@email.com");
});

// TESTS FOR GETTERS //

// testing for getName() manager
test("can get name via getName()", () => {
    const manager = new Manager("Youssef");
    expect(manager.getName()).toBe(manager.name);
});

// testing for getId() manager
test("can get id via getId()", () => {
    const manager = new Manager("Youssef", 199);
    expect(manager.getId()).toBe(manager.id);
});


// testing for getEmail() manager
test("can get id via getEmail()", () => {
    const manager = new Manager("Youssef", 199, "email@test.com");
    expect(manager.getEmail()).toBe(manager.email);
});


// testing for getRole() manager
test("can get id via getRole()", () => {
    const manager = new Manager("Youssef", 199, "email");
    expect(manager.getRole()).toBe("Manager");
});