// Assignment Code
var form = document.getElementById('passwordGenForm');
var passwordDisplay = document.getElementById('passwordDisplay');
var charRange = document.getElementById('charRange');
var charNumber = document.getElementById('charNumber');
var includeLowercaseEl = document.getElementById('includeLowercase');
var includeUppercaseEl = document.getElementById('includeUppercase');
var includeNumbersEl = document.getElementById('includeNumbers');
var includeSymbolsEl = document.getElementById('includeSymbols');

var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numberArray= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var symbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "]", "{", "}", ";", ":", "<", ">", "?", "/"]

//gets password length from the form

charNumber.addEventListener('input', syncCharacterAmount);
charRange.addEventListener('input', syncCharacterAmount);

function syncCharacterAmount(e) {
    var value = e.target.value
    charRange.value = value
    charNumber.value = value
}

// Code preparing to Generate Password

function generatePassword(characterAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    var passwordGo = []

    if(includeLowercase) passwordGo = passwordGo.concat(lowerCaseArray);
    if(includeUppercase) passwordGo = passwordGo.concat(upperCaseArray);
    if(includeNumbers) passwordGo = passwordGo.concat(numberArray);
    if(includeSymbols) passwordGo = passwordGo.concat(symbolsArray);

    var passwordCharacters = ""

    for (var i = 0; i < characterAmount; i++) {
        passwordCharacters += passwordGo[Math.floor(Math.random() * passwordGo.length)] 
    }
    return passwordCharacters;
}


// checks form inputs and display Generated Password

form.addEventListener('submit', e => {
    e.preventDefault()
    var characterAmount = charNumber.value
    var includeUppercase = includeUppercaseEl.checked
    var includeLowercase = includeLowercaseEl.checked
    var includeNumbers = includeNumbersEl.checked
    var includeSymbols = includeSymbolsEl.checked
    var password = generatePassword(characterAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
   passwordDisplay.innerText = password
   document.getElementById("copyinput").value = password
})

// copy text button

function copyPassword() {
    var copyinput = document.getElementById("copyinput");
    copyinput.select();
    copyinput.setSelectionRange(0, 99999); 
    document.execCommand("copy");
  }