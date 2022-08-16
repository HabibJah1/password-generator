// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //prompt user to input quantity of characters
  var charQuant = window.prompt(
    "How many characters would you like your password to contain?"
  );

  var passwordLength = parseInt(charQuant);
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

  var numberPassword = window.confirm(
    "Would you like your password to include numbers?"
  );
  var symbolPassword = window.confirm(
    "Would you like your password to include symbols?"
  );
  var lowerCasePassword = window.confirm(
    "Would you like your password to include lowercase letters?"
  );
  var upperCasePassword = window.confirm(
    "Would you like your password to include uppercase letters?"
  );
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
