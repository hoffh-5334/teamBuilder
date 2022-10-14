const inquirer = require('inquirer')
const Manager = require("./lib/manager")
const Employees = []
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const fs = require('fs')

inquirer.prompt([
  {
    type: "input",
    message: "What is the manager's name?",
    name: "name"
  },
  {
    type: "input",
    message: " what is the manager's ID?",
    name: "id"
  },
  {
    type: "input",
    message: "What is the manager's email?",
    name: "email"
  },
  {
    type: "input",
    message: "What is the manager's office number",
    name: "officeNumber"
  }
]).then(function(answers){
  const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
  Employees.push(manager)
  menu()
})

function menu(){
  inquirer.prompt([
    {
      type: "list",
      message: "What employee would you like to add?",
      name: "action",
      choices: ["Engineer", "Intern", "Build Team"]
    }
  ]).then(function(answer){
    if(answer.action==="Engineer"){
      inquirer.prompt([
        {
          type: "input",
          message: "What is the engineer's name?",
          name: "name"
        },
        {
          type: "input",
          message: " what is the engineer's ID?",
          name: "id"
        },
        {
          type: "input",
          message: "What is the engineer's email?",
          name: "email"
        },
        {
          type: "input",
          message: "What is the engineer's github",
          name: "github"
        }
      ]).then(function(answers){
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        Employees.push(engineer)
        menu()
      })

    }else if(answer.action==="Intern"){
      inquirer.prompt([
        {
          type: "input",
          message: "What is the intern's name?",
          name: "name"
        },
        {
          type: "input",
          message: " what is the intern's ID?",
          name: "id"
        },
        {
          type: "input",
          message: "What is the intern's email?",
          name: "email"
        },
        {
          type: "input",
          message: "What is the intern's school",
          name: "school"
        }
      ]).then(function(answers){
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        Employees.push(intern)
        menu()
      })

    }else{
      let HTML= generateHTML(Employees)
      fs.writeFile("./dist/index.html", HTML, function(error){
        error ? console.log(error) : console.log("profile generated")
      })
    }
  })
}
function generateHTML(Employees){
let employeeHTML = ''
for(let i = 0 ; i < Employees.length; i++){
  let special = ''
  if(Employees[i].getRole()==="Manager"){
    special = Employees[i].getOfficeNumber()
  }else if(Employees[i].getRole()==="Engineer"){
    special = Employees[i].getGithub()
  }else{special = Employees[i].getSchool()}
  employeeHTML+=`
  <div class ="container">
    <div class ="card col-3" style ="width: 15rem; margin: 50px;">
      <div class="card-header" style = "background-color: blue; color: white;">

        <h3> ${Employees[i].getName()}</h3>
        <h4>${Employees[i].getRole()}</h4>
      </div>
     
      <ul class="list-group list-group-flush" style="list-style: none;">
        <li>ID: ${Employees[i].getId()}</li>
        <li>Email: ${Employees[i].getEmail()}</li>
        <li>${special}</li>
      </ul>

    </div>  
  </div>
  `
  
}
return`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Builder</title>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    <link rel="stylesheet" href="../style.css">
  />
</head>
<header>
<div class="jumbotron jumbotron-fluid">
<div class="container">
  <h1 class="display-4">My Team</h1>
</div>
</div>
</header>
<body>
  ${employeeHTML}
</body>
</html>`
}