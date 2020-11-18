let guess = 500;
let max = 1000;
let min = 1;

console.log(`Guess a number between ${min} and ${max}`);
console.log(`Is you number higer or lower than ${guess}?`);
console.log('Press the Up Arrow for higher and the Down Arrow for lower. Press enter is the guess is your number.')
max = 1000 + 1

document.addEventListener("keydown", function(e) {
  console.log(e.keyCode)
  if(e.keyCode == 13){
    console.log(`Your number is ${guess}`)
  } else if (e.keyCode == 38) {
    guess = Math.round((max + guess) / 2)
    console.log(`Is your number ${guess}`)
  } else if (e.keyCode == 40) {
    guess = Math.round((min + guess) / 2);
    console.log(`Is your number ${guess}`)
  }
})