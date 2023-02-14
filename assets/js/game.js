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
// create a function
var fight = function () {
  window.alert("Welcome to Robot Gladiators!");
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName +
      " attacked " +
      enemyName +
      ". " +
      enemyName +
      " now has " +
      enemyHealth +
      " health remaining."
  );
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
    enemyName +
      " attacked " +
      playerName +
      ". " +
      playerName +
      " now has " +
      playerHealth +
      " health remaining."
  );
};

// execute the function
fight();
