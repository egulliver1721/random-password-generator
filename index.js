const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let boxElOne = document.getElementById("passwordBoxOne");
let boxElTwo = document.getElementById("passwordBoxTwo");
let passwordLength = 10;
let passwordOne = "";
let passwordTwo = "";
let disabled = false;

let passwordLengthInput = document.getElementById("passwordLength");
passwordLengthInput.addEventListener("change", setPasswordLength);

function setPasswordLength() {
  passwordLengthNew = passwordLengthInput.value;
}

let passwordBtn = document.getElementById("passwordButton");
passwordBtn.addEventListener("click", generatePassword);

function generatePassword() {
  if (disabled === false) {
    for (let i = 0; i <= passwordLength; i++) {
      let randomCharacterOne = Math.floor(Math.random() * characters.length);
      let randomCharacterTwo = Math.floor(Math.random() * characters.length);
      passwordOne += characters[randomCharacterOne];
      passwordTwo += characters[randomCharacterTwo];
      boxElOne.textContent = passwordOne;
      boxElTwo.textContent = passwordTwo;
      disabled = true;
    }
  }
}

let clearBtn = document.getElementById("clearButton");
clearBtn.addEventListener("click", setDisabled);

function setDisabled() {
  disabled = false;
  passwordOne = "";
  passwordTwo = "";
  boxElOne.textContent = "";
  boxElTwo.textContent = "";
}
