// Austin Fletcher
// Homework #2 Word Guess Game
// game.js

// Game variables
var numOfWins = 0;
var currentWord = [];
var wordList = ["cat","dog","fish","mouse","cow","owl","rabbit","can"];
var randomWord =  [];
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
  randomWord =  wordList[Math.floor(Math.random()*wordList.length)];
  var i = wordList.indexOf(randomWord);
  console.log(i);
  console.log(randomWord);
  wordList.splice(i,1)
  if (wordList.length == 0){
    console.log("You win!");
    resetList();
  }
// Store the randomWord into current word for the user to guess.
currentWord = randomWord;

/*Test loop DELETE BEFORE TURN IN!!!!!!!!!!!!!!

//  for(i = 0; i < randomWord.length; i++){
//    console.log("Random Letter " + i + ": " + randomWord[i]);
//  }
// for(i = 0; i < currentWord.length; i++){
//   console.log("Current Letter " + i + ": " + currentWord[i]);
// }
*/
}
function letterGuess(){
  console.log(document.getElementById("letterGuessBox"))
  console.log("Ouch!")
}


// Play Game
function playGame(){
  getWord();
  getWord();
  getWord();
  getWord();
  getWord();
  getWord();
  getWord();
  getWord();
  getWord();
  getWord();
  getWord();
}

playGame();