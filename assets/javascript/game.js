// Variable definitions

let resultMessage = document.getElementById('result');
let userScore = document.getElementById('user-score');
let letterspace = document.getElementById('letter-space');
let totalletterChoose = document.getElementById('totalLetter');
let totalTurns = document.getElementById('total-turns');
let startButton = document.getElementById('startButton');

let answerArray = [];
let totalletterArray = [];
let remainLetters = 0;


// Array of words
let wordsArray = ['tokyo','opening','medal','swimming'];

// Pick a random word from the array

function getWord(word) {

  for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
    letterspace.textContent = answerArray.join(" ");
    }
    remainGuess(word);
    console.log(word);
 }

 function remainGuess(word){
  remainLetters = word.length;
  totalTurns.innerHTML = remainLetters;
  return remainLetters;
}

function game(userGuess, word) {  
  for (let j = 0; j < word.length; j++ ) {
    if (word[j] === userGuess) {
      answerArray[j] = userGuess;
      letterspace.innerHTML = answerArray.join(" ");          
     }        
  }    
}


function main() {
    startButton.addEventListener('click', () => {
    resultMessage.innerHTML = 'Guess a letter!!'; 
    let word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    totalletterArray = [];
    totalletterChoose.innerHTML = totalletterArray;
    answerArray = [];
    getWord(word);
    remainGuess(word);
   
  
    document.onkeyup = function(event) {
      let userGuess = event.key;
        
      if (event.keyCode >= 65 && event.keyCode <= 90) {
        evualtion(userGuess, word) 
            
        }
        else {
          resultMessage.innerHTML = 'Please enter only alphabets in lower cases!!';
        }  
  }
});
};
function evualtion(userGuess, word) {

  if ( totalletterArray.includes(userGuess) ){
    resultMessage.innerHTML = 'Already choose that letter!!';
    } 
    else {
         if( word.includes(userGuess)) {
           console.log(userGuess);
           resultMessage.innerHTML = 'Good work!!';
           game(userGuess,word);
           totalletterArray.push(userGuess);
         } else {
           resultMessage.innerHTML = 'Upss you lose a point!!';
           
           if ( !word.includes(userGuess) ) {
             remainLetters--;
             totalTurns.innerHTML = remainLetters;
             totalletterArray.push(userGuess);
             verify();   
           }
         }
         totalletterChoose.innerHTML = totalletterArray;   
     } 
    };
  
  function verify(){
    if (remainLetters > 0){

    } else{
    
      resultMessage.innerHTML = 'Game Over mmmm!!'
      setTimeout( clean,  2000);
     }
    }

    function clean() {
      document.getElementById('startButton').click();
      }
 
 
main();
