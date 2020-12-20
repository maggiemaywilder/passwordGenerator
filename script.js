// Assignment Code
var generateBtn = document.querySelector("#generate");

// Criteria arrays
const numbers = Array.from("0123456789");
const upperCase = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const lowerCase = Array.from("abcdefghijklmnopqrstuvwxyz");
const specials = Array.from(" !\"#$%&\'()*+\,-./:;<=>?@[\\]^_`{|}~");

// Variables for input
var quantity;
var includeNumbers;
var includeUpper;
var includeLower;
var includeSpecials;
var include;

function getLength() {
    do {
        quantity = parseInt(prompt("How many characters would you like your password to contain", "Value must be a whole number between 8 and 128 characters."))
     }
    while (quantity === null || Number.isInteger(quantity) === false || quantity < 8 || quantity > 128) {
        }
    return quantity;
    }

function whichCharacters() {
    includeNumbers = confirm("Would you like to include numbers?");
    includeUpper = confirm("Would you like to include upper case letters?");
    includeLower = confirm("Would you like to include lower case letters?");
    includeSpecials = confirm("Would you like to include special characters?");
        console.log(includeNumbers);
        console.log(includeUpper);
        console.log(includeLower);
        console.log(includeSpecials);

};

function generateArray() {
  console.log(includeNumbers);
  console.log(includeUpper);
  console.log(includeLower);
  console.log(includeSpecials);

}

/*

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
    getRandomInt();
};
*/

function writePassword() {
    getLength();
    console.log(quantity);
    whichCharacters();
    generateArray();
    console.log("function called");
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*
// Nested function (Tech CBT video YouTube)  
function writePassword() {
    //define Criteria: function to collect criteria
  function Criteria() {
    quantity = prompt("How many characters would you like your password to contain?", "Value between 8 and 128 characters.");
    // alert if not correct amount of characters
    // ***** need to add if not integer *****
        if (quantity < 8 || quantity > 128) {
         alert("Password must be a whole number between 8 and 128 characters!");
        }
      number = confirm("Click OK to confirm using numeric characters");
      upper = confirm("Click OK to confirm using upper case characters");
      lower = confirm("Click OK to confirm using lower case characters");
      special = confirm("Click OK to confirm using special characters");
    };
  function generateArray(); 
  function createUnique(); 
    // Calling functions
      return this.quantity + ", " + this.number + ", " + this.upper + ", " + this.lower + ", " + this.special;
/*
// Functions defined
var Criteria = function() {
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
/*
} 
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

