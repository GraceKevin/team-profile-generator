function buildManager (manager) {
    return `
    <div class="col-4">
        <div class="card h-100">
            <div class="card-header" id="card-header">
                <h3>${manager.name}</h3>
                <h4><i class="fas fa-mug-hot"></i> Manager </h4>
            </div>
        <div class="card-body">
            <p class="id">ID - ${manager.ID}</p>
            <p class="email">Email - <a href="mailto:${manager.email}"> ${manager.email}</a></p>
            <p class="officeID">Office Number - ${manager.officeNumber} </p>
        </div>
        </div>
    </div>
    `
}

function buildEngineer (engineer) {
    return `
    <div class="col-4">
        <div class="card h-100">
            <div class="card-header" id="card-header">
                <h3>${engineer.name}</h3>
                <h4><i class="fas fa-glasses"></i> Engineer </h4>
            </div>
        <div class="card-body">
            <p class="id">ID - ${engineer.ID}</p>
            <p class="email">Email - <a href="mailto:${engineer.email}"> ${engineer.email}</a></p>
            <p class="github">Github - <a href="https://github.com/${engineer.github}">${engineer.github}</a> </p>
        </div>
        </div>
    </div>
    `
}

function buildIntern (intern) {
    return `
        <div class="col-4">
        <div class="card h-100">
            <div class="card-header" id="card-header">
                <h3>${intern.name}</h3>
                <h4><i class="fas fa-user-graduate"></i> Intern </h4>
            </div>
        <div class="card-body">
            <p class="id">ID - ${intern.ID}</p>
            <p class="email">Email - <a href="mailto:${intern.email}"> ${intern.email}</a></p>
            <p class="school">School - ${intern.school} </p>
        </div>
        </div>
    </div>
    `
}

function buildTeam (team) {
    const HTML = [];
    HTML.push (team.filter(teamMember => teamMember.getRole() === 'Manager').map(manager => buildManager (manager)));
    HTML.push (team.filter(teamMember => teamMember.getRole() === 'Engineer').map(engineer => buildEngineer (engineer)));
    HTML.push (team.filter(teamMember => teamMember.getRole() === 'Intern').map(intern => buildIntern (intern)));
    
    return HTML.join("")
}

function generateHTML (team) {
    return `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link rel="stylesheet" href="./assets/style.css">

    </head>

    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="nav"> My Team </span>
            </nav>
        </header>

        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-portfolio">
                    ${buildTeam(team)}   
                </div>
            </div>
        </main>

    </body>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"> </script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"> 

    </html>`
}

module.exports = generateHTML;