// Assignment code here
var numbers = "0123456789";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var symbols = "~!@#$%^&*()";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var all = "";

  // All possible character variables availables for user-prompted input
  // Create a variable named "length" and assign value for user-prompted input, convert to integer using parseInt().
  var length = parseInt(window.prompt("Pick a password length from 8 -128.")); 

  // If user-prompted input is less that 
  if(length <8 || length >128) {
    alert("Password length is not between 8 - 128");
    location.reload();
  }
}
