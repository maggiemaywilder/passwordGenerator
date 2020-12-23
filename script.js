// Assignment Code
var generateBtn = document.querySelector("#generate");

// Criteria arrays
const numbers = Array.from("0123456789");
const upperCase = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const lowerCase = Array.from("abcdefghijklmnopqrstuvwxyz");
const specials = Array.from(" !\"#$%&\'()*+\,-./:;<=>?@[\\]^_`{|}~");

// Variables for input
var quantity; // password length, from function getLength
var includeNumbers;
var includeUpper;
var includeLower;
var includeSpecials; // all responses to prompts from function whichCharacters
var includeArray = []; // characters selected to include for password selection, concatenated from individual include arrays selected
var randomArray = []; // array of random numbers for password, from function create
var passwordArray = []; // array translated from indexes defined in randomArray
var password;

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
  includeArray = ["null"];
    if (includeNumbers == true) {
      includeArray = includeArray.concat(numbers)
    };
    if (includeUpper == true) {
      includeArray = includeArray.concat(upperCase)
    };
    if (includeLower == true) {
      includeArray = includeArray.concat(lowerCase)
    };
    if (includeSpecials == true) {
      includeArray = includeArray.concat(specials)
    };
    result = includeArray;
    console.log(includeArray);
};
      

  // Function to generate array, using round so it can round up or down to get both ends of criteria array
  function create() {
    for (var i = 0; i < quantity; i++) {
      randomArray[i] = Math.ceil(Math.random() * includeArray.length);
    }
    result = randomArray;
    console.log(randomArray);
    };

  // I was unable to make map work, will revisit later
    // function to map to random indexes to their value on criteria array (Travis Rodgers 30 methods class, skillshare)
    function translate() {
      for (var j = 0; j < randomArray.length; j++) {
        passwordArray[j] = includeArray[randomArray[j]];

      }
      result = passwordArray;
      console.log(passwordArray);
      // randomArray.map(function(element) {
      // passwordArray = includeArray[randomArray[element]]; 
      //  return passwordArray;
      //  console.log(passwordArray);
      password = passwordArray.join("");
        return password;
      };

// function to join to string (see below)

  function writePassword() {
    getLength();
    whichCharacters();
    generateArray();
    console.log(includeArray);
    create();
    translate();
    console.log(password); //Check to make sure it made it this far.
};

/*
passwordArray.join("");  (Travis Rodgers 30 methods class, skillshare)
  return password;
*/



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
