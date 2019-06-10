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


 let answerArray = [];
 let totalletterArray = [];
 let remainLetters = 0;

 let word = wordsArray[Math.floor(Math.random() * wordsArray.length)];


 


 function main() {
  startButton.addEventListener('click', () => {
    resultMessage.innerHTML = 'Guess a letter!!';
    getWord(word);

    })
   };

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

document.onkeyup = function(event) {
    let userGuess = event.key;
      
    if (event.keyCode >= 65 && event.keyCode <= 90) {

      
            
           if ( totalletterArray.includes(userGuess) ){
           resultMessage.innerHTML = 'Already choose that letter!!';
           } 
           else {
                if( word.includes(userGuess)) {
                  console.log(userGuess);
                  resultMessage.innerHTML = 'Good work!!';
                  game(userGuess);
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
       
      }
      else {
        resultMessage.innerHTML = 'Please enter only alphabets in lower cases!!';
      }  
}

  // Function to fill the letter found in the word array



  function verify(){
    if (remainLetters > 0){

    } else{
    
      resultMessage.innerHTML = 'Game Over!!'
      setTimeout( clean,  3000);
     
     }
    }


    function clean() {
      totalletterArray = [];
      totalletterChoose.innerHTML = totalletterArray;
      
      
      
     
      getWord(word);
      remainGuess(word);
    }

main();


  
  


