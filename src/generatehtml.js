function generateHTML(teamMembers) {
    cards = [];
    let footer = `</div>
   </div>

</body>

</html>`
    for (i = 0; i < teamMembers.length; i++) {
        if (teamMembers[i].getRole() === "Manager") {
           const managerCard = generateManagerCard(teamMembers[i]);
           cards.push(managerCard);
        } 
        if (teamMembers[i].getRole() === "Engineer") {
            const engineerCard =  generateEngineerCard(teamMembers[i]);
            cards.push(engineerCard);
        } 
        if (teamMembers[i].getRole() === "Intern") {
            const internCard = generateInternCard(teamMembers[i]);
            cards.push(internCard);
        }
    }

    employeeCards = cards.join(" ");

    return employeeCards + footer
}

function generateManagerCard(manager) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"> 
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../dist/styles.css">    
        <title>Team Members</title>
    </head>
    
    <body>
    
        <div class="jumbotron jumbotron-fluid jumbo-custom text-center">
            <div class="container">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
    
        <div class="container">
            <div class="row">
    <div class="card m-4 bg-primary card-custom">
    <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
        <h6 class="card-subtitle m-2">${manager.getRole()}</h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email:<a href = "${manager.email}"> ${manager.email}</a></li>
        <li class="list-group-item">Office: ${manager.officeNumber}</li>
    </ul>
</div>`
    
}


function generateEngineerCard(engineer) {
    return `<div class="card m-4 bg-primary card-custom">
    <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
        <h6 class="card-subtitle m-2">${engineer.getRole()}</h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email:<a href = "${engineer.email}"> ${engineer.email}</a></li>
        <li class="list-group-item">Github:<a href ="${engineer.github}"target="_blank" rel="noopener noreferrer"> ${engineer.github}</a></li>
    </ul>
</div>`
}

function generateInternCard(intern) {
    
    return `<div class="card m-4 bg-primary card-custom">
    <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <h6 class="card-subtitle m-2">${intern.getRole()}</h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email:<a href = "${intern.email}"> ${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
    </ul>
</div>`
}


module.exports = generateHTML;


