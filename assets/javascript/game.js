// Variable definitions

let resultMessage = document.getElementById('result');
let userScore = document.getElementById('user-score');
let letterspace = document.getElementById('letter-space');
let totalletterChoose = document.getElementById('totalLetter');
let totalTurns = document.getElementById('total-turns');
let startButton = document.getElementById('startButton');

// Array of words
let wordsArray = ['tokyo','opening','medal','swimming'];

// Pick a random word from the array

 let word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
 let answerArray = [];
 let totalletterArray = [];
 let remainLetters = 0;

 function main() {
  startButton.addEventListener('click', () => {
    getWord();  
    resultMessage.innerHTML = ' Guess a letter!!';
  })
 };

function getWord() { 
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
    letterspace.textContent = answerArray.join(" ");
    }
    console.log(word);
   remainGuess();
   
}

function remainGuess(){
   remainLetters = word.length;
   totalTurns.innerHTML = remainLetters;
   return remainLetters;
}


document.onkeyup = function(event) {
    let userGuess = event.key;
      
      
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        console.log(event.keyCode);

        
    
        if ( totalletterArray.includes(userGuess) ){
          resultMessage.innerHTML = 'Already choose that letter!!';
        } else {
          if( word.includes(userGuess)) {
            console.log(userGuess);
            resultMessage.innerHTML = 'Good work!!';
            game(userGuess);
          } else {
            resultMessage.innerHTML = 'Upss you lose a point!!';
            remainLetters--;
            totalTurns.innerHTML = remainLetters;
          }
          totalletterArray.push(userGuess);

          totalletterChoose.innerHTML = totalletterArray;
        
          console.log(totalletterArray);
        }
       
      } else {
        resultMessage.innerHTML = 'Please enter only alphabets in lower cases!!';
      }
}

  // Function to fill the letter found in the word array
  function game(userGuess) {
  
    for (let j = 0; j < word.length; j++ ) {
      if (word[j] === userGuess) {
        answerArray[j] = userGuess;
        letterspace.innerHTML = answerArray.join(" ");
        console.log(answerArray);       
       }        
    }    
  }

main();


  
  


