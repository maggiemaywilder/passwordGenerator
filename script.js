// Assignment Code
var generateBtn = document.querySelector("#generate");

// Criteria arrays
const numbers = Array.from("0123456789"),
  upperCase = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
  lowerCase = Array.from("abcdefghijklmnopqrstuvwxyz"),
  specials = Array.from(" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");

// Variables for input
var passwordLength,
  includeNumbers,
  includeUpper,
  includeLower,
  includeSpecials,
  include,
  includeArray = [],
  passwordArray = [];

// Function for choosing length
function getLength() {
  do {
    passwordLength = Number(prompt(
        "How many characters would you like? \n(8 to 128) characters only!",
        "68"));
  } while (isNaN(passwordLength) ||
           passwordLength < 8 ||
           passwordLength > 128);

  return passwordLength;
}

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
};
      

  // Function to generate array, using round so it can round up or down to get both ends of criteria array
  function create() {
    for (var i = 0; i < passwordLength; i++) {
      passwordArray[i] = Math.round(Math.random() * includeArray.length);
    }
    result = passwordArray;
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
