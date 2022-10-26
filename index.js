const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        name: "fName",
        message: "Please enter your name:"
    },
    
    {
        type: "input",
        name: "id",
        message: "Please enter your ID:"
    },

    {
        type: "input",
        name: "email",
        message: "Please enter your email"
    }
];



function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
    });
}

init();