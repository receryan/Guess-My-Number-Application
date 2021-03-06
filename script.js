"use strict";

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! ð';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Function to set message
const displayMessage = function(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input from player
  if (!guess) {
    // document.querySelector(".message").textContent = "â No Number!";
    displayMessage('â No Number!');
  } 

  // When player wins the game
  else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Number! ð";
    displayMessage('Correct Number! ð');
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } 
  // When guess is wrong
  else if(guess !== secretNumber) {
    if(score > 1) {
      // document.querySelector(".message").textContent = guess > secretNumber ? "ð Too High!" : "ð Too Low!";
      displayMessage(guess > secretNumber ? "ð Too High!" : "ð Too Low!")
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      // document.querySelector(".message").textContent = "ð­You Lose!";
      displayMessage("ð­You Lose!");
      document.querySelector('.score').textContent = 0;
    }
  }
  // ************LESS SIMPLIFIED CODE BELOW************
  // // When the guess is too high
  // else if (guess > secretNumber) {
  //   if(score > 1) {
  //     document.querySelector(".message").textContent = "ð Too High!";
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }
  //   else {
  //     document.querySelector(".message").textContent = "ð­You Lose!";
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } 
  // // When the guess is too low
  // else if (guess < secretNumber) {
  //   if(score > 1) {
  //     document.querySelector(".message").textContent = "ð Too Low!";
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }
  //   else {
  //     document.querySelector(".message").textContent = "ð­You Lose!";
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});



document.querySelector(".again").addEventListener("click", function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector(".guess").value = '';
});