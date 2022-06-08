// Assignment Code
var generateBtn = document.querySelector("#generate");

function Integer(min, max) {

  if(!max) {
    max = min;
    min = 0; 
  }

  var random = Math.random()

  return Math.floor(min * (1 - random)+ random * max); 
}

function RandomItem(lists) {
  return lists[Integer(lists.length)];
}
//added generatePassword function
function generatePassword(userPassword) {
  //logging button push for debug
  console.log("Button clicked");
  
  //while loop to control weather the prompt closes or continues action
  while(true) {

    // prompt the user for password criteria
    // make a way for the user to input data for the length of the password
        var userInput = window.prompt("To Create a password you must first choose your password length ranging from 8 characters to 128 characters long input information below");
    
        if(userInput === null) {
        return;
        }
    
    // make a way to define users password length
        var yourpasslength = userInput;
    
    // make a way to keep users length in parameters
        if(yourpasslength < 8 || yourpasslength > 128) {
          window.confirm("To Create a password you must choose your password length ranging from 8 characters to 128 characters");
        } else{
          break;
        }
    }

//make variable lists
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbers = ["1","2","3","4","5","6","7","8","9","0"];
  var symbols = ["!","@","#","$","%","&","?"];


  


  
//verify user inputs
  var userInputlowercase = window.confirm("Would you like to use lowercase letters?");
  var userInputuppercase = window. confirm("Would you like to use uppercase letters?");
  var userInputnumbers = window.confirm("Would you like to use numbers?");
  var userInputsymbols = window.confirm("Would you like to use symbols?");

  // make a way to use userinputs and use the lists along side them | this one took me ages to figure out.
  var passwordOptions = []

    if(userInputlowercase === true) {
      passwordOptions.push(lowercase);
    }
    if(userInputuppercase === true) {
      passwordOptions.push(uppercase);
    }
    if(userInputnumbers === true) {
      passwordOptions.push(numbers);
    }
    if(userInputsymbols === true) {
      passwordOptions.push(symbols);
    }
  

  //make password return to page
  var userPassword = "";
  
  for (var i = 0; i < yourpasslength; i++) {
    var list = RandomItem(passwordOptions);
    var character = RandomItem(list);
    userPassword += character;
  }

  return userPassword;
}






// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
