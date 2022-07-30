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

// //connecting to html
// let btnPasswordGenerator = document.querySelector(`.btn-password-generator`);
// let passwordOne = document.querySelector(`.password-one`);
// let passwordTwo = document.querySelector(`.password-two`);

// btnPasswordGenerator.addEventListener("click", function () {
//   resetGenerator();
//   generatePassword();
// }); // added this last = this will reset the button and generate password at the same time

// // generating password via js math.random
// function generatePassword() {
//   for (let i = 0; i < 12; i++) {
//     let randomIndexOne = Math.floor(Math.random() * characters.length); // math.floor start, math.random the function, * characters.length as end point
//     let randomIndexTwo = Math.floor(Math.random() * characters.length); // math.floor start, math.random the function, * characters.length as end point
//     passwordOne.textContent += characters[randomIndexOne]; // this is to show it to the html  - passwordOne connects, textcontent -- += characters [randomIndexOne] shows the result in ht browser
//     passwordTwo.textContent += characters[randomIndexTwo];
//   } // this is to show it to the html  - passwordOne connects, textcontent -- += characters [randomIndexOne] shows the result in ht browser
// }

// function resetGenerator() {
//   passwordOne.textContent = "";
//   passwordTwo.textContent = "";
// }

//this is to reset to nothing

// 2nd try

let btnPasswordGenerator = document.querySelector(`.btn-password-generator`);
let passwordOne = document.querySelector(`.password-one`);
let passwordTwo = document.querySelector(`.password-two`);

function generatePassword() {
  for (let i = 0; i < 12; i++) {
    let randomIndexOne = Math.floor(Math.random() * characters.length);
    let randomIndexTwo = Math.floor(Math.random() * characters.length);
    passwordOne.textContent += characters[randomIndexOne];
    passwordTwo.textContent += characters[randomIndexTwo];
  }
}

function resetPassword() {
  passwordOne.textContent = "";
  passwordTwo.textContent = "";
}

btnPasswordGenerator.addEventListener("click", function reset() {
  resetPassword();
  generatePassword();
});
