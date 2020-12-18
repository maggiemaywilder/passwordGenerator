// Assignment Code
var generateBtn = document.querySelector("#generate");



// Criteria arrays
  const numbers = Array.from("0123456789");
  const upperCase = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  const lowerCase = Array.from("abcdefghijklmnopqrstuvwxyz");
  const specials = Array.from(" !\"#$%&\'()*+\,-./:;<=>?@[\\]^_`{|}~");

// Functions defined
var Criteria = function() {
  quantity = prompt("How many characters would you like your password to contain?", "Value between 8 and 128 characters.");
// alert if not correct amount of characters
    if (quantity < 8 || quantity > 128) {
     alert("Password must be between 8 and 128 characters!");
    }
  number = confirm("Click OK to confirm using numeric characters");
  upper = confirm("Click OK to confirm using upper case characters");
  lower = confirm("Click OK to confirm using lower case characters");
  special = confirm("Click OK to confirm using special characters");
    return criteria = (quantity, number, upper, lower, special);
  };

function generateArray() {
  var selection = [];
    if (number = true) {
      selection.push(numbers);
    }
    if (upper = true) {
      selection.push(upperCase);
    }
    if (lower = true) {
      selection.push(lowerCase);
    }
    if (special = true) {
      selection.push(specials);
    }
      return selection;
  }

function createUnique()


// Calling functions with button

function writePassword() {
  function collectCriteria();
  function generateArray(); 
  function createUnique(); 
}  

 /* 
// Create constructor via Dani Krossing tutorial
function Criteria
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function criteriaSelector(quantity, number, upper, lower, special) {
  passwordCriteria = {
    quantity: quantity,
    number: number,
    lower: lower,
    upper: upper,
    special: special,
  };
  console.log(passwordCriteria);
}
*/


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

