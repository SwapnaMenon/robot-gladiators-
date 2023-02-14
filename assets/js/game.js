//  ensure that the javascript code loads. Test to see if the HTML file reads the javascript file correctly.
//  window.alert("This is an alert! JavaScript is running!");

//  Creating a function "fight"
// function fight() {
//   window.alert("The fight has begun!");
// Storing user input using variables.
//   var playerName = window.prompt("What is your robot's name?");
// window.prompt()- adds an alert where the user can input values.
// }
// window.prompt(playerName);
// fight();

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Robot";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
};

fight();