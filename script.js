let guess = 500;
let max = 1000;
let min = 1;

let upBtn = document.getElementById("upButton");
upBtn.addEventListener("click", guessHigher);

let dwnBtn = document.getElementById("downButton");
dwnBtn.addEventListener("click", guessLower);

let correctBtn = document.getElementById("correctBtn").addEventListener("click" , correct)

function guessHigher() {
  console.log("HIGHER");
  min = guess;
  guess = Math.round((max + min) / 2) 
  guessTxt.innerHTML = `Is you number higer or lower than ${guess}?`;
  console.log(guess)
}

function guessLower() {
  max = guess;
  guess = Math.round((max + min) / 2) 
  guessTxt.innerHTML = `Is you number higer or lower than ${guess}?`;
  console.log(guess)
}

function correct() {
  guessTxt.innerHTML = `Your number is ${guess}`
}

max = 1000 + 1



let instructionTxt = document.getElementById("instructionsTxt");
instructionTxt.innerHTML = `Guess a number between ${min} and ${max}`;

let guessTxt = document.getElementById("guessTxt");
guessTxt.innerHTML = `Is you number higer or lower than ${guess}?`;