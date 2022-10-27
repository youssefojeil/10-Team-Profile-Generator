const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

// TESTS FOR SETTERS //
// testing set employee name
test("can set name via constructor arguments", () => {
    const employee = new Employee("Youssef");
    expect(employee.name).toBe("Youssef");
});

// testing set employee id
test("can set id via constructor arguments", () => {
    const employee = new Employee("Youssef", 15);
    expect(employee.id).toBe(15);
});

// testing set employee email
test("can set email via constructor arguments", () => {
    const employee = new Employee("Youssef", 24, "test@email.com");
    expect(employee.email).toBe("test@email.com");
});

// TESTS FOR GETTERS //

// testing for getName() employee
test("can get name via getName()", () => {
    const employee = new Employee("Youssef");
    expect(employee.getName()).toBe(employee.name);
});

// testing for getId() employee
test("can get id via getId()", () => {
    const employee = new Employee("Youssef", 199);
    expect(employee.getId()).toBe(employee.id);
});


// testing for getEmail() employee
test("can get email via getEmail()", () => {
    const employee = new Employee("Youssef", 199, "email@test.com");
    expect(employee.getEmail()).toBe(employee.email);
});


// testing for getRole() employee
test("can get role via getRole()", () => {
    const employee = new Employee("Youssef", 199, "email");
    expect(employee.getRole()).toBe("Employee");
});