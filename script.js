// Assignment Code

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var special = ["\u0021", "\u0022", "\u0023", "\u0024", "\u0025", "\u0026", "\u0027", "\u0028", "\u0029", "\u002A", "\u002B", "\u002C", "\u002D", "\u002E", "\u002F", "\u003A", "\u003B", "\u003C", "\u003D", "\u003E", "\u003F", "\u0040", "\u005B", "\u005C", "\u005D", "\u005E", "\u005F", "\u0060", "\u007B", "\u007C", "\u007D", "\u007E"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var yourPassword = [];

function generatePassword() {
  userChoice = (prompt("How long do you want your password?"));
  if (!userChoice) {
    return;
  }
  if (userChoice < 8 || userChoice > 128) {
    alert("password must be between 8 and 128 characters long")
    return;
  }


  var passNumbers = confirm("Do you want your password to contain numbers?  Okay for yes, Cancel for no");
  if (passNumbers === true);

  var passSpecial = confirm("Do you want your password to contain special characters?  Okay for yes, Cancel for no");
  if (passSpecial === true);


  var passLower = confirm("Do you want your password to contain lowercase letters?  Okay for yes, Canel for no");
  if (passLower === true);


  var passUpper = confirm("Do you want your password to contain uppercase letters?  Okay for yes, Cancel for no");
  if (passUpper === true);


  if (!passNumbers && !passSpecial && !passLower && !passUpper) {
    return "Password must contain at least one of the assigned variables.";
  }
}


// Write password to the #password input
var generateBtn = document.querySelector("#generate");

function writePassword() {



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button


generateBtn.addEventListener("click", writePassword);
