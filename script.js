// Assignment Code

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var special = ["\u0021", "\u0022", "\u0023", "\u0024", "\u0025", "\u0026", "\u0027", "\u0028", "\u0029", "\u002A", "\u002B", "\u002C", "\u002D", "\u002E", "\u002F", "\u003A", "\u003B", "\u003C", "\u003D", "\u003E", "\u003F", "\u0040", "\u005B", "\u005C", "\u005D", "\u005E", "\u005F", "\u0060", "\u007B", "\u007C", "\u007D", "\u007E"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function generatePassword() {
  // gives a prompt window asking for password length and convert the response into a number
  userChoice = parseInt(prompt("How long do you want your password?"));
  // ends if the user hits cancel instead of inputing a number
  if (!userChoice) {
    return;
  }
  // returns an alert if an invalid number is entered
  if (userChoice < 8 || userChoice > 128) {
    alert("password must be between 8 and 128 characters long")
    return;
  }

  // asks the user if they want their password to contain different values
  var passNumbers = confirm("Do you want your password to contain numbers?  Okay for yes, Cancel for no");


  var passSpecial = confirm("Do you want your password to contain special characters?  Okay for yes, Cancel for no");



  var passLower = confirm("Do you want your password to contain lowercase letters?  Okay for yes, Canel for no");


  var passUpper = confirm("Do you want your password to contain uppercase letters?  Okay for yes, Cancel for no");


  // Empty array for holding potential characters for the new password
  var newPasswordCharacters = []


  // empty array for the new password
  let newPassword = []

  // if statements checking status of confirms and using a math loop to push at least 1 of the true values into the new password characters
  if (passNumbers) {
    var selectedNumber = numbers[Math.floor(Math.random() * numbers.length)]
    newPasswordCharacters.push(selectedNumber)
    // adds the numbers array into the new password to choose from
    newPassword = newPassword.concat(numbers);
  }
  if (passSpecial) {
    var selectedSpecial = special[Math.floor(Math.random() * special.length)]
    newPasswordCharacters.push(selectedSpecial)
    // adds the special array into the new password to choose from
    newPassword = newPassword.concat(special);
  }
  if (passLower) {
    var selectedLower = lower[Math.floor(Math.random() * lower.length)]
    newPasswordCharacters.push(selectedLower)
    // adds the lower array into the new password to choose from
    newPassword = newPassword.concat(lower);
  }
  if (passUpper) {
    var selectedUpper = upper[Math.floor(Math.random() * upper.length)]
    newPasswordCharacters.push(selectedUpper)
    // adds the upper array into the new password to choose from
    newPassword = newPassword.concat(upper);

  }
  // returns a message that at least one of the values must be picked if the user hits cancel on all confirms
  if (!passNumbers && !passSpecial && !passLower && !passUpper) {
    return "Password must contain at least one of the assigned values.";
  }
  // runs through the userchoice and selects random choices from the length of the password array(apart from any of the reserved spots from earlier) to give us the secured password
  for (let i = 0; i < userChoice; i++) {
    var newPasswordCode = newPassword[Math.floor(Math.random() * newPassword.length)]
    newPasswordCharacters.push(newPasswordCode)

  }
  // return the new passwrod as a string value with no commas
  return newPasswordCharacters.join('');
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
