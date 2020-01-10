document.addEventListener("DOMContentLoaded", function () {
    // Handler when the DOM is fully loaded



    // Global variables for Word Guess game //
    var keyword = "";
    var corLet = [];
    var wrongLet = [];
    var winsByUser = 0;
    var guessByUser = 12;
    // Nfl words to use for Football Hangman //
    var getRandomNflWord = function () {
        var nflWords = ["catch", "touchdown", "football", "fullback", "running", "quarterback", "titans", "cointoss", "deadball", "defence", "offence", "placekick", "huddle", "packers", "texans", "radiers", "seahawks", "interception", "turnover", "kickoff", "touchback", "passer", "pitch", "possession", "forwardpass"];

        //function word_picker() 
        var randWord, endWord;
        randWord = Math.floor(Math.random() * nflWords.length);
        endWord = nflWords[randWord];
        return endWord;
    }
    // this is to make the random word appear as a  _ _ _ _ based on the letters in word
    var secret_word = getRandomNflWord();
    var display_word = [];
    for (var i = 0; i < secret_word.length; i++) {

        display_word.push('_');
    }

    // intitalize the new_display word, so that I will not see the ---- after typing the "good letters"
    //Capture the user's guess by letters pressed, and display the letters
    document.addEventListener('keyup', (event) => {

        keyword = event.key;
        // this is to check if the user is a correct 
        if (secret_word.indexOf(keyword) > -1) {
            // now push the correct letters to the corLet 
            corLet.push(keyword);
            console.log(corLet);
            //replace the word with the underscore
            // does the display word match the secret word?
            // update the correct guessed letters to the user
            for (var x = 0; x < secret_word.length; x++) {
                var current_letter = secret_word[x];

                if (current_letter === keyword) {
                    // place the letter in the correct spot on the word
                    display_word[x] = keyword;
                    console.log(x);
                }

            }
            document.getElementById("secretWord").innerHTML = "The Current word is: " + display_word.join('');

            if (display_word.join(' ') === secret_word) {
                // I want to change the alert to a ++ to the var wins by user
                alert('you Win');
            }
        }
        else {
            wrongLet.push(keyword);
            console.log(wrongLet);
            // display the wrong letters for that secret word
            document.getElementById("wrongGuess").innerHTML = "Wrong Guesses: " + wrongLet.join(' ');
        }
        console.log(keyword)

    });

    // display the secret word on the Html page with underscore to show the # of letters in the hint "should look like _ _ _ _ _"

    document.getElementById("secretWord").innerHTML = "The Current word is: " + display_word.join("");

    // checking to see the function returns a random Nfl word //
    console.log(secret_word);
    console.log(display_word);

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
