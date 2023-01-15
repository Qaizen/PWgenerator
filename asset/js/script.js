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

  // All possible character variables availables for input
  // Create a variable named "length" and assign value forinput, convert to integer using parseInt().
  var length = parseInt(window.prompt("Pick a password length from 8 -128.")); 

  // If input is less 8 or more than 128 show message and try again
  if(length <8 || length >128) {
    alert("Password length is not between 8 - 128");
    location.reload();
  }

  // Confirm whether or not to use lowercase
  if (window.confirm("Do you want your password to contain lowercase letters?")) {
    all += lower;
  }
  
  // Confirm whether or not to use uppercase
  if (window.confirm("Do you want your password to contain uppercase letters?")) {
    all += upper;
  }

  // Confirm whether or not to use numercial values
  if(window.confirm("Do you want numerical values for your password?")){
    all += numbers;

  // Confirm whether or not to use numerical values
  if (window.confirm("Do you want your password to contain special characters?")) {
    all += symbols;
  }
  
}
}
