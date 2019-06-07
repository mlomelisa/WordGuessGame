// Variable definitions

let resultMessage = document.getElementById('result');
let userScore = document.getElementById('user-score');
let letterspace = document.getElementById('letter-space');
let totalletterChoose = document.getElementById('totalLetter');
let totalTurns = document.getElementById('total-turns');

let startMessage = "Guess a letter";

// Array of words
let wordsArray = ['tokyo','opening','medal','swimming'];

// Array of letters

// let letterArray = ['a','b','c','d','e','f','g','h','i','j','k',
// 'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Pick a random word from the array

let word = wordsArray[Math.floor(Math.random() * wordsArray.length)];

//Show how many letters has the word

var answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = '_';
}

// Create a variable to hold the number of remaining letters to be guessed

let remainLetters = word.length;

  //  while (remainLetters > 0){
    letterspace.innerHTML = answerArray.join(" ");
  //  }



document.onkeyup = function(event) {
  let userGuess = event.key;
  resultMessage.innerHTML = ' Guess a letter!!';
}