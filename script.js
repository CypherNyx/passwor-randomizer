// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Set arrays with all possible characters.
var upperCaseChartrs = ["A","B","C","D","E","F","G","H","I","J","K","L","M",'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseChartrs = ["a","b","c","d","e","f","g","h","i","j","k","l","m",'n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numericChartrs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChartrs = ["!","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

function generatePassword(){
  // promt: How many characters?
  // Store info in var for answer
  
  // Prompt: What type of characters?
  // Options: Special number, upper, lower
  // use confirm prompts to record user's input

   // set var(s): wantsLowerCase, wantsUpperCase, wantsNumChartr, wantsSpecialChartr 
  
  // take all "TRUE" arrays and concat into new array
  // Choose random chars from combined array based on user input
  //* Var push into new array

  //* Var password = Turn array into string.toString()
  //* Return password
  

  //How Many Characters + Validate amount of characters?
  const numOfChartrs = parseInt(prompt("How many characters do you want in your password? \n Choose between 8-128 characters."));
    // How can I prevent user from entering letter instead of Number? = Used parseInt in prompt on line 41

  console.log("number of characters", numOfChartrs);
  if (Number.isNaN(numOfChartrs)){
    alert("Choose a valid NUMBER! \n Please try again.");
    numOfChartrs = prompt("Please enter a valid Number.");
  }
   if (numOfChartrs < 8 || numOfChartrs > 128) {
    alert("Choose a valid number of characters..\n Please try again.");
    numOfChartrs = prompt("Choose a password length of at LEAST 8 characters \n and NO MORE than 128 characters.");
  }  else {
    alert("Your password will be " + numOfChartrs + " characters long.");
  }


  //What type of characters?
  const wantsLowerCase = confirm("Would you like to include lowercase characters?");
  console.log("lowercase:", wantsLowerCase);
  const wantsUpperCase = confirm("Would you like to include UPPERCASE characters?");
  console.log("UPPERCASE:", wantsUpperCase);
  const wantsNumChartr = confirm("Would you like to include numbers?");
  console.log("Numbers:", wantsNumChartr);
  const wantsSpecialChartr = confirm("Would you like to include special characters?");
  console.log("Special:", wantsSpecialChartr);

  //Make sure that at least one character type is chosen
  if (wantsLowerCase === false && wantsUpperCase === false && wantsNumChartr === false && wantsSpecialChartr === false) {
    alert("Please select at least one character type.");
    // ! How can I send the user to the begining of the function to either enter the # or select types?
  const wantsLowerCase = confirm("Would you like to include lowercase characters?");
  console.log("lowercase:", wantsLowerCase);
  const wantsUpperCase = confirm("Would you like to include UPPERCASE characters?");
  console.log("UPPERCASE:", wantsUpperCase);
  const wantsNumChartr = confirm("Would you like to include numbers?");
  console.log("Numbers:", wantsNumChartr);
  const wantsSpecialChartr = confirm("Would you like to include special characters?");
  console.log("Special:", wantsSpecialChartr);
  };

  // Concatenate the arrays based on the user's selected character types
  var passwordArray = [];
  if (wantsLowerCase) {
    passwordArray = passwordArray.concat(lowerCaseChartrs);
  }
  if (wantsUpperCase) {
    passwordArray = passwordArray.concat(upperCaseChartrs);
  }
  if (wantsNumChartr) {
    passwordArray = passwordArray.concat(numericChartrs);
  }
  if (wantsSpecialChartr) {
    passwordArray = passwordArray.concat(specialChartrs);
  }

  // ! Generate Password?
  //Create an iteration loop that picks a random char from passwordArray for as many times as numOfChartrs chosen by user
  var password = "";
  for (var key=0; key < numOfChartrs; key++){
    // * Randomly select a character from the passwordArray and add it to the password string
    var randomCharacter = Math.floor(Math.random() * passwordArray.length);
    //* Math floor = gives me a full integer, math random chooses a char from contactinated array BUT
    // ! why use passwordArray.length?
    password += passwordArray[randomCharacter];


  }

        //* Return new safe password
        return password;
  


}
console.log(password);