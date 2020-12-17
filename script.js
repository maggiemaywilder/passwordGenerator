// Assignment Code
var generateBtn = document.querySelector("#generate");

// Criteria arrays
  const numbers = Array.from("0123456789");
  const upperCase = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  const lowerCase = Array.from("abcdefghijklmnopqrstuvwxyz");
  const specials = Array.from(" !\"#$%&\'()*+\,-./:;<=>?@[\\]^_`{|}~");

  // Checking arrays 
console.log(specials);
console.log(numbers);
console.log(upperCase);
console.log(lowerCase);

// Prompts to generate criteria

function criteriaSelector() {
  var quantity = prompt("How many characters would you like your password to contain?", "Value between 8 and 128 characters.");
    // alert if not correct amount of characters
    if (quantity < 8 || quantity > 128) {
      alert("Password must be between 8 and 128 characters!");
      break;
    };
  var number = prompt("Click OK to confirm using numeric characters");
  var upper = prompt("Click OK to confirm using upper case characters");
  var lower = prompt("Click OK to confirm using lower case characters");
  var special = prompt("Click OK to confirm using special characters");


}

var passwordCriteria = {
  quantity: 10,
  number: true,
  lower: true,
  upper: true,
  special: false,
}


if (characters < 8 || characters > 128) {  
  alert("Password must be between 8 and 128 characters")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
