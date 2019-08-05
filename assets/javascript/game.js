// Austin Fletcher
// Homework #3 Word Guess Game
// game.js

// html containers
var winsContainer = document.getElementById('numOfWinsID').textContent;

// Game variables
var numOfWins = 0;
var currentWord = [];
var wordList = ["cat","dog","fish","mouse","cow","owl","rabbit","can"];
var randomWord = "";
var letter = "";
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// User variables
var userGuess = [];
var guessRemaining = 20;
var wrongGuesses = [];

// Setup game
function resetGame(){
  numOfWins = 0;
  currentWord = [];
  resetList();
  userGuess = [];
  guessRemaining = 20;
  wrongGuesses = [];
}

// Reset the word list
function resetList(){
  wordList = ["cat","dog","fish","mouse","cow","owl","rabbit","can"];
}

// Select random item from wordList and store into current word, delete that word from list.
function getWord(){
  guessRemaining = 20;
  randomWord =  wordList[Math.floor(Math.random()*wordList.length)];
  let i = wordList.indexOf(randomWord);
  console.log("randomWord: " + randomWord);
  wordList.splice(i,1)
  if (wordList.length == 0){
    console.log("You answered all the words! reseting the list.");
    resetList();
  }
  // Store the randomWord into current word for the user to guess.
  currentWord.length = randomWord.length;
  for(let i =0;i<currentWord.length;i++){
    currentWord[i] = "_";
  }
  console.log("FUNCTION GETWORD: " + randomWord +" "+ currentWord);
}


// When the user presses a letter, test the letter.
document.onkeyup = function(event){
  let found = false
  letter = event.key;
  // Loop through the random word and look for guessed letter.
  for(let i = 0;i<randomWord.length;i++){
    if(letter === randomWord[i]){
      //Check the letter and store in currentWord.
      currentWord[i] = letter;
      found = true;
      wrongGuesses.push(letter);
    }
    else if(i === randomWord.length-1 && found === false) {
      guessRemaining--;
      console.log(letter + " was not part of the word. You have " + guessRemaining + " remaining.")
      wrongGuesses.push(letter);
      if(guessRemaining === 0){
        console.log("Sorry out of guesses! The word was: " + randomWord);
        getWord();
      }
    }

    
  }
  let stringConvert = "";
  stringConvert = currentWord.join("");
  console.log("The letter you entered was: " + letter + " the current word is: " + stringConvert+ " the random word is: " + randomWord);
  // console.log("The type of current word is: " + typeof(currentWord.join(""))); //object
  // console.log("The type of random word is: " + typeof(randomWord)); //string
  // console.log("The type of stringConvert is: " + typeof(stringConvert) + " " + stringConvert);

  // If the word is solved get a new random word.
  if(stringConvert == randomWord){
    console.log("You Win!")
    numOfWins++;
    winsContainer = numOfWins.stringConvert;
    getWord();
  }

}

// Play Game
function playGame(){
resetGame();
getWord();

}




// call functions

getWord();