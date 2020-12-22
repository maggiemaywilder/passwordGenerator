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
var includeArray = [];
var passwordArray = [];

// Function for choosing length
function getLength() {
    do {
        quantity = parseInt(prompt("How many characters would you like your password to contain", "Value must be a whole number between 8 and 128 characters."))
     }
    while (quantity === null || Number.isInteger(quantity) === false || quantity < 8 || quantity > 128) {
        }
    return quantity;
    };

// Function for selecting character types
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

// Function for creating array to generate password from 
function generateArray() {
  var includeArray = [];
    if (includeNumbers) {
      includeArray.push(numbers)
    };
    console.log(includeArray);
    if (includeUpper == true) {
      includeArray.push(upperCase)
    };
    if (includeLower == true) {
      includeArray.push(lowerCase)
    };
    if (includeSpecials == true) {
      includeArray.push(specials)
    };
    return includeArray;
};
      

  // Function to generate array, using round so it can round up or down to get both ends of criteria array
  function create() {
    for (var i = 0; i < quantity; i++) {
      passwordArray[i] = Math.round(Math.random() * includeArray.length);
    }
    console.log(passwordArray);
    };

  // function to map to criteria array
    function translate() {

    }

// function to join to string (see below)

  function writePassword() {
    getLength();
    whichCharacters();
    generateArray();
    console.log(includeArray);
    create();
    console.log("function called"); //Check to make sure it made it this far.
};

/*
passwordArray.join("");
  return password;


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
    getRandomInt();
};
*/



/*
function generateArray() {
  var selection = [];
    if (number = true) {
      selection.push(numbers);
    }
  }
*/
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
