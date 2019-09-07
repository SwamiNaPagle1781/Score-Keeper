/* eslint-disable linebreak-style */
/* eslint-disable no-var */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style

/* get all the elements from html */
var teamOne = document.getElementById('teamOne');
var teamTwo = document.getElementById('teamTwo');
var team1Display = document.getElementById('team1Display');
var team2Display = document.getElementById('team2Display');
var goalChange = document.querySelector('#goal');
var userInput = document.querySelector('input');
var resetButton = document.querySelector('#resetButton');
/* variables to be able to change html display */
var team1Score = 0;
var team2Score = 0;
var winScore = 11;
var gameOver = false;
teamOne.addEventListener('click', function() {
  if (!gameOver) {
    team1Score++;
    if (team1Score === winScore) {
      team1Display.style.color = 'magenta';
      gameOver = true;
    }
    team1Display.textContent = team1Score;
  }
});
teamTwo.addEventListener('click', function() {
  if (!gameOver) {
    team2Score++;
    if (team2Score === winScore) {
      team2Display.style.color = 'magenta';
      gameOver = true;
    }
    team2Display.textContent = team2Score;
  }
});

userInput.addEventListener('change', function() {
  goalChange.textContent = userInput.value;
  winScore = Number(userInput.value);
});

resetButton.addEventListener('click', function() {
  team1Score = 0;
  team2Score = 0;
  gameOver = false;
  team1Display.style.color = 'black';
  team2Display.style.color = 'black';
  team1Display.textContent = 0;
  team2Display.textContent = 0;
});
