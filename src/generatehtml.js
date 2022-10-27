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

    console.log(cards);
    console.log(cards.length);

    return "testing"
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
        <title>Document</title>
    </head>
    
    <body>
    
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
    
        <div class="container">
            <div class="row">
    <div class="card mr-4 bg-primary" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email:${manager.email}</li>
        <li class="list-group-item">Office:${manager.officeNumber}</li>
    </ul>
</div>`
    
}


function generateEngineerCard(engineer) {
    console.log(engineer.name, engineer.id, engineer.email, engineer.github);
    return `<div class="card mr-4 bg-primary" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email:${engineer.email}</li>
        <li class="list-group-item">${engineer.github}</li>
    </ul>
</div>`
}

function generateInternCard(intern) {
    
    return `<div class="card mr-4 bg-primary" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email:${intern.email}</li>
        <li class="list-group-item">${intern.school}</li>
    </ul>
</div>`
}


module.exports = generateHTML;


