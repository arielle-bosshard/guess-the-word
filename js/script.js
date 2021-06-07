//The unordered list where the player's guessed letters will appear.
const guesses = document.querySelector(".guessed-letters");
//The button with the text "Guess!" in it.
const button = document.querySelector(".guess");
//The text input where the player will guess a letter.
const guessInput = document.querySelector(".letter");
//The empty paragraph where the word in progress will appear.
const wordProgress = document.querySelector(".word-in-progress");
//The paragraph where the remaining guesses will display.
const remaining = document.querySelector(".remaining");
//The span inside the paragraph where the remaining guesses will display.
const remainingGuesses = document.querySelector(".remaining span");
//The empty paragraph where messages will appear when the player guesses a letter.
const message = document.querySelector(".message");
//The hidden button that will appear prompting the player to play again.
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

const wordsProgress = function(word){
   const letters = [];
   for (const letter of word) {
       console.log(letter);
       letters.push("●");
   };
    wordProgress.innerHTML = letters.join("");
}

wordsProgress(word);

button.addEventListener("click", function(e){
    e.preventDefault();
    const letterGuess = guessInput.value;
    console.log(letterGuess);
    guessInput.value = "";
})