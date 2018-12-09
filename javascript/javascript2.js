var guessesLeft = 12;

var wrongList = [];
var hiddenWord = [];
var correctGuesses = [];
var wins = 0;

var wordList = ["scar", "mercury", "pinball"]
//ask TA
function resetGame(){
    guessesLeft = 12;
    wrongList = [];
    hiddenWord = [];
    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
}
// var newRandomWordVariable = newRandomWord()
// function newRandomWord(){
//     return randomWord = wordList[Math.floor(Math.random() * wordList.length)];

// }

var hiddenWordText = document.getElementById(id="hiddenWord");
var wrongGuess = document.getElementById(id="wrongGuessScript");
var guessesLeftNew = document.getElementById(id="numberGuessesScript");
var totalWins = document.getElementById(id="winsScript");
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(randomWord);



$(document).ready(function(){
    //pushes the random hidden word to the page

    for (i=0; i<randomWord.length; i++){
        hiddenWord.push("_ ");
        hiddenWordText.textContent = hiddenWord.join(' ');
    }
    //reads the key presses
    document.onkeyup = function(event){
        var keyPress = event.key;
    //checks if key pressed is a chosen key
        if(randomWord.indexOf(keyPress) >= 0){
            //starts a for loop to check which letter matches the guess
            for(i=0; i<randomWord.length; i++){
                //if statement to check each time the loop is passed
                if(randomWord[i] == keyPress){
                    hiddenWord[i] = keyPress;
                    correctGuesses.push(keyPress);
                    hiddenWordText.textContent = hiddenWord.join(' ');
                }
            }
        //subtracts a guess and prints on page    
        }
        else{
            guessesLeft--;
            guessesLeftNew.textContent = guessesLeft;
            wrongList.push(" " + keyPress);
            wrongGuess.textContent = (wrongList);
            //I could not get this to work.
            /*for(i=0;i<wrongList.length;i++){
                if(wronglist[i] != keyPress){
                wrongList.push(keyPress);
                wrongGuess.textContent = wrongList;
                }else {
                wrongGuess.textContent = wrongList;
                }
            }*/

            
        } //I could not get this to work.
        if (hiddenWord.length === correctGuesses.length){
            wins++;
            totalWins.textContent = wins;
            resetGame(); 
            newRandomWord();
        }

        //Asks question and prompts reload of page

    
        if(guessesLeft <= 0){
            guessesLeftNew.textContent = "Out Of Guesses!";
            var gameOver = confirm("Do you want to try again?");
            if (gameOver === true){
                resetGame();
                
            }
        } 
    }
});