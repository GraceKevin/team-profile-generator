function buildManager (manager) {
    return `
    <div class="col-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4> testing </h4>
            </div>
        <div class="card-body">
            <p class="id">ID- ${manager.Id}</p>
            <p class="email">Email- ${manager.email}</p>
            <p class="officeID">Office Number- ${manager.officeNumber} </p>
        </div>
        </div>
    </div>
    
    <li> ${manager.getName()} </li>`
}

function buildEngineer (engineer) {
    return `<li> ${engineer.getName()}</li>`
}

function buildIntern (intern) {
    return `<li> ${intern.getName()}</li>`
}

function buildTeam (team) {
    const HTML = [];
    HTML.push (team.filter(teamMember => teamMember.getRole() === 'Manager').map(manager => buildManager (manager)));
    HTML.push (team.filter(teamMember => teamMember.getRole() === 'Engineer').map(engineer => buildEngineer (engineer)));
    HTML.push (team.filter(teamMember => teamMember.getRole() === 'intern').map(intern => buildIntern (intern)));
    
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
    </head>

    <body>
     ${buildTeam(team)}   

    </body>

    <script href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"> </script>
    </html>`
}