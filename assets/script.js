// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// function to return a random integer
function int(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  var rand = Math.random();
  return Math.floor(min*(1 - rand) + rand*max);
}

function getListItem(list) {
  return list[int(0, list.length)];
}
// this function will begin running our application 
function generatedPassword() {
  //prompt user to input quantity of characters
  var userInput = window.prompt(
    "How many characters would you like your password to contain?"
  );

  var passwordLength = parseInt(userInput);
  //alert user that input is invalid
  if (isNaN(passwordLength)) {
    window.alert("That's not a number !!");
    return;
  }
  // Set range for character quantity and alert user if input value isn't within range
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters");
    return;
  }
  // character choice validation for password
  var numbersPass = window.confirm(
    "Would you like your password to include numbers?"
  );
  var symbolsPass = window.confirm(
    "Would you like your password to include symbols?"
  );
  var lowercasePass = window.confirm(
    "Would you like your password to include lowercase letters?"
  );
  var uppercasePass = window.confirm(
    "Would you like your password to include uppercase letters?"
  );
  //variables for stored character types
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbol = ["#", "$", "%", "&", "?", "@", "!", "*", "/", "^"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z",];
  var uppercase = [];

  var charType = [];

  for (var i = 0; i < lowercase.length; i++) {
    uppercase[i] = lowercase[i].toUpperCase();
  }
  if (numbersPass === true) {
    charType.push(number);
  }

  if (symbolsPass === true) {
    charType.push(symbol);
  }
  if (lowercasePass === true) {
    charType.push(lowercase);
  }
  if (uppercasePass === true) {
    charType.push(uppercase);
  }
  if (charType.length === 0) {
    charType.push(lowercase);
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatedPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
