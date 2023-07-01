// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = writePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var upperCaseChartrs = ["A","B","C","D","E","F","G","H","I","J","K","L","M",'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseChartrs = ["a","b","c","d","e","f","g","h","i","j","k","l","m",'n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numericChartrs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChartrs = ["!","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

function writePassword(){
  //* promt: How many characters
  //* Store info in var for answer
  
  //* Prompt: What type of characters
  //* Options: Special number, upper, lower
  //* window.confirm

  //* Use answers to make password
  //* create vars that include all possible characters
  //* separate vars for each type, by making arrays
  //* var uppercaseLetters 
  //* var specialCharacters 

  //* take all "TRUE" arrays and concat into new array
  //* Choose random chars from array based on user input
  //* Var push into new array

  //* Var password = Turn array into string.toString()
  //* Return password
  // const aNumber = Number(window.prompt("How many characters do you want in your password? Choose between 8-128 characters.", ""));

  //How Many Characters
  const numOfChartrs = prompt("How many characters do you want in your password? \n Choose between 8-128 characters.");
  console.log(numOfChartrs);
  if (numOfChartrs < 8 || numOfChartrs > 128) {
    return "Please choose a valid number of characters.";
  } else if (Number.isNaN(numOfChartrs)){
    // return 'Number NaN';
    numOfChartrs = prompt("Please enter a valid Number.");
  } else {
    alert("Your password will be " + numOfChartrs + " characters long.");
  }


  //What type of characters?
  const wantsLowerCase = confirm("Would you like to include lowercase characters?");
  const wantsUpperrCase = confirm("Would you like to include UPPERCASE characters?");
  const wantsNumChartr = confirm("Would you like to include numbers?");
  const wantsSpecialChartr = confirm("Would you like to include special characters?");


  
  
    



   if (wantsLowerCase){
     
   }












}