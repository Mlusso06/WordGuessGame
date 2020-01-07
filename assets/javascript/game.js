document.addEventListener("DOMContentLoaded", function () {
    // Handler when the DOM is fully loaded



    // Nfl words to use for Football Hangman //
    var keyword = "";
    var new_display_word = '';
    var getRandomNflWord = function () {
        var nflWords = ["catch", "touchdown", "football", "fullback", "running", "quarterback", "titans", "cointoss", "deadball", "defence", "offence", "placekick", "huddle", "packers", "texans", "radiers", "seahawks", "interception", "turnover", "kickoff", "touchback", "passer", "pitch", "possession", "forwardpass"];

        //function word_picker() {
        var randWord, endWord;
        randWord = Math.floor(Math.random() * nflWords.length);
        endWord = nflWords[randWord];
        return endWord;

    }
    // this is to make the random word appear as a  _ _ _ _ based on the letters in word
    var secret_word = getRandomNflWord();
    var display_word = "";
    for (var i = 0; i < secret_word.length; i++) {
        display_word += '_';
    }

    //Capture the user's guess by letters pressed, and display the letters
    document.addEventListener('keyup', (event) => {
        keyword = event.key;
        console.log(keyword)
        // for loop to run throught the word and check it against the key stroke
        for (var i = 0; i < secret_word.length; i++) {
            if (secret_word[i] === keyword) {
                //change the display to reveal the letters in the word
                new_display_word += keyword;
                document.getElementById("secretWord").innerHTML = "The Current word is: " + new_display_word;
                //dont want update if they guessed wrong => add 1 mistake and record the mistake
            } else {
                new_display_word += '_';
            }
        }
    });

    // display the secret word on the Html page with _____ to show the # of letters in the hint "should look like _ _ _ _ _"

    document.getElementById("secretWord").innerHTML = "The Current word is: " + display_word;
// Need code to check against the secret word, and then if they are not in the word it should display in the "wrongletter" on the html box



    // checking to see the function returns a random Nfl word //
    console.log(secret_word);
    console.log(display_word);
    console.log(new_display_word);



    // We want to start the guessing game with 0 wins, and 12 guesses for the user
    var winsByUser = 0;
    var guessByUser = 12;

    // When the user presses the "Start Game button" the run the randome word generator 
    // function startGame() {



    // creating a var to hold the text for the wins and guesses
    // var winsText = document.getElementById("winsByUser");

    //display the wins and guesses
    // winsText.textContent = "User Wins:" + winsByUser;
    // }

    // This is to update the wins if user guesses correctly
    // function userWins() {
    //     document.querySelector("#winsByUser").innerHTML = "Score: " + winsByUser;
    //   }

    //   userWins();


});
