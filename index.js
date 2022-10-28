const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generatehtml");

const teamMembers = []

const managerQuestions = [
    {
        type: "input",
        name: "mName",
        message: "What is your team manager's name?"
    },
    
    {
        type: "input",
        name: "id",
        message: "Please enter your ID:"
    },

    {
        type: "input",
        name: "email",
        message: "Please enter your email:"
    },

    {
        type: "input",
        name: "office",
        message: "Please enter your office number:"
    },

    {
        type: "list",
        name: "member",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any team members"]
    }
];

const engQuestions = [
    {
        type: "input",
        name: "eName",
        message: "What is your engineer's name?"
    },
    
    {
        type: "input",
        name: "id",
        message: "Please enter your engineer's ID:"
    },

    {
        type: "input",
        name: "email",
        message: "Please enter your engineer's email:"
    },
    
    {
        type: "input",
        name: "github",
        message: "Please enter your engineer's github:"
    },
    
    {
        type: "list",
        name: "member",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any team members"]
    }
];

const internQuestions = [
    {
        type: "input",
        name: "iName",
        message: "What is your intern's name?"
    },
    
    {
        type: "input",
        name: "id",
        message: "Please enter your intern's ID:"
    },

    {
        type: "input",
        name: "email",
        message: "Please enter your intern's email:"
    },
    
    {
        type: "input",
        name: "school",
        message: "Please enter your intern's school:"
    },

    {
        type: "list",
        name: "member",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any team members"]
    }
];

function internInit() {
    inquirer.prompt(internQuestions).then((answers) => {
        const intern = new Intern(answers.iName, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        if(answers.member === "Engineer") {
            engineerInit();
        }
        else if(answers.member === "Intern") {
            internInit();
        }
        
        else {
            writeToFile(teamMembers);
        }
    }); 
}

// to initilize engineer
function engineerInit() {
    inquirer.prompt(engQuestions).then((answers) => {
        const engineer = new Engineer(answers.eName, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        if(answers.member === "Engineer") {
            engineerInit();
        }
        else if(answers.member === "Intern") {
            internInit();
        }
        else{
            writeToFile(teamMembers);
        }

        
    });
}

function writeToFile(teamMembers) {
    fs.writeFile(`./dist/index.html`, generateHTML(teamMembers), (err) => {
        err ? console.log(err) : console.log("Successfully Generated HTML file");
    });
}



function managerInit() {
    inquirer.prompt(managerQuestions).then((answers) => {
        const manager = new Manager(answers.mName, answers.id, answers.email, answers.office)
        teamMembers.push(manager);
        if(answers.member === "Engineer") {
            engineerInit();
        }
        else if(answers.member === "Intern") {
            internInit();
        }
        else{
            writeToFile(teamMembers);
        }
    });

}



managerInit();

