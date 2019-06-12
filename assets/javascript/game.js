// Variable definitions

let resultMessage = document.getElementById('result');
let resultMessageLose = document.getElementById('resultLose');
let resultMessageWin = document.getElementById('resultWin');
let userScore = document.getElementById('user-score');
let letterspace = document.getElementById('letter-space');
let totalletterChoose = document.getElementById('totalLetter');
let totalTurns = document.getElementById('total-turns');
let startButton = document.getElementById('startButton');
let animatedGif = document.getElementById('animated-gif');
let answerArray = [];
let totalletterArray = [];
let remainLetters = 0;
let score = 0;


// Array of words
let wordsArray = ['reservoir dogs','pulp fiction','jackie brown','kill bill','death proof','inglourious basterds','django unchained','the hateful eight','erase una vez en hollywood'];

// Fill the Answer array with underscore in base string lenght

function getWord(word) {

  for (let i = 0; i < word.length; i++) {
    if (word[i] === ' '){
      answerArray[i] = '-';
   } else {
     answerArray[i] = '_';
     letterspace.textContent = answerArray.join(" ");
     }    
  }
    remainGuess(word);
   };

  // 
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
    resultMessageLose.innerHTML = '';
    resultMessageWin.innerHTML = '';
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
           
           resultMessage.innerHTML = 'Good work!!';
           game(userGuess,word);
           totalletterArray.push(userGuess);
           verify(); 
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

      if ( !answerArray.includes('_') ) {
        resultMessage.innerHTML = '';
        resultMessageWin.innerHTML = 'Great you guess the word!!';
        score++;
        userScore.innerHTML = score;
        
        setTimeout( clean,  2000);
      } else{

      }

    } else{
      resultMessage.innerHTML = '';
      resultMessageLose.innerHTML = 'Game Over!!'
      setTimeout( clean,  2000);
     }
    }

    function clean() {
      document.getElementById('startButton').click();
      resultMessageLose.innerHTML = '';
      resultMessageWin.innerHTML = '';
      }
 
 
main();
