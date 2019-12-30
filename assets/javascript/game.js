// Nfl words to use for Football Hangman //

var getRandomNflWord = (function() {
var nflWords = ["catch", "touchdown", "football", "fullback", "running", "quarterback", "titans", "coin toss", "dead ball", "defence", "offence", "placekick", "huddle", "packers", "texans", "radiers", "seahawks", "interception", "turnover", "kickoff", "touchback", "passer", "pitch", "possession", "forward pass"];

return function () {
var randWord, endWord;
randWord = Math.floor(Math.random() * nflWords.length);
endWord = nflWords[randWord]
return endWord;
};
})();
// checking to see the function returns a random Nfl word //
console.log(getRandomNflWord());


