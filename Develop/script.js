// various password character Arrays
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\\", "^", "_", "`", "{", "}", "~"];

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  var charLength = prompt("How many characters would you like to use in your password? (Must be 8-128)");
  if (charLength < 8 || charLength > 128) {
    alert("Please select a number between 8 and 128!")
    return
  }

  var wantsLower = confirm("Would you like to use lowercase letters in your password?");
  var wantsUpper = confirm("Would you like to use uppercase letters in your password?");
  var wantsNum = confirm("Would you like to include numbers in your password?");
  var wantsSpecialChars = confirm("Would you like to include special characters in your password?");

  var passwordChars = finalCharArray(wantsLower, wantsUpper, wantsNum, wantsSpecialChars)

  if (passwordChars.length === 0) {
    alert("Must choose at least one valid character type!")
    return
  }

  var password = "";
  for (var i = 0; i < charLength; i++) {
    password += passwordChars[randomInt(passwordChars.length)]
  }

  document.getElementById("password").value = password;
}

// builds final Array that will be used in password generator
function finalCharArray(wantsLower, wantsUpper, wantsNum, wantsSpecialChars) {
  var passwordChars = [];

  if (wantsLower === true) {
    passwordChars = passwordChars.concat(lower)
  }

  if (wantsUpper === true) {
    passwordChars = passwordChars.concat(upper)
  }

  if (wantsNum === true) {
    passwordChars = passwordChars.concat(num)
  }

  if (wantsSpecialChars === true) {
    passwordChars = passwordChars.concat(specialChars)
  }

  return passwordChars;
}

function randomInt(length) {
  const num = Math.random()
  return Math.floor(num * length)
}
