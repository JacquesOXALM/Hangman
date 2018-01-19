

var Animals= ["gorilla", "elephant", "shark"];
var Difficult= ["plethora","xylophone", "catatonic", "disagreement", "gigabyte"];
var Cheeses= ["brie", "manchego", "gruyere", "mozzarella", "parmesan"];
var Footballers= ["mbappe", "messi", "lemar", "varane", "koscielny", "lloris"];
var categories= [Animals, Difficult, Cheeses, Footballers];
var word="";
var guessesLeft= 15;
var guessedLetter = [];
var displayedLetters = "";
var possibleGuesses = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function toStart() {
    guessesLeft = 15;
    document.getElementById("title").innerHTML = "HANGMAN";
    document.getElementById("instructions").innerHTML = "Select A Category To Start!";
}

function printWord(){
    var displayGuess = "";
    for(var i = 0; i < word.length; i++){
        if(guessedLetter.indexOf(word[i]) > -1){
            displayGuess += word[i] + " ";

        }else{
            displayGuess += "_ ";
        }
    }
    document.getElementById("underline").innerHTML = displayGuess;
    return displayGuess;

}

function startGame() {
    guessesLeft = 15;
    document.getElementById("aButton").disabled = false;
    document.getElementById("guessesLeft").innerHTML = "Guesses Remaining: " + 15;
    document.getElementById("playAgain").innerHTML = "";
    document.getElementById("image").innerHTML = "";
    displayedLetters = "";
    document.getElementById("letter").length = 0;
    for (var i=0; i< possibleGuesses.length; i++){
        console.log(document.getElementById("letter").value);
        //document.getElementById("letter").innerText = possibleGuesses[i];
        document.getElementById("letter").innerHTML += "<option value=" + possibleGuesses[i] + ">" + possibleGuesses[i] +"</option>";
    }
    guessedLetter=[];
    word = "";


    document.getElementById("Ltaker").innerHTML = "";
    document.getElementById("Phatdub").innerHTML = "";

    var x = document.getElementById("categories").value;
    var category = categories[x];
    console.log(categories);
    word = category[Math.floor(Math.random() * category.length)];


    //for (var i = 0; i < word.length; i++) {
      //  displayedLetters += "_ ";
    //}
    console.log(word);
    printWord();


}

function guessLetter(){
    var x= document.getElementById("letter");
    var guess = document.getElementById("letter").value;
    guessedLetter.push(guess);
    var displayGuess= "";

    printWord();

    x.remove(x.selectedIndex);
    guessesLeft --;
    document.getElementById("guessesLeft").innerHTML = "Guesses Remaining: " + guessesLeft;
    if(guessesLeft==0 && printWord().indexOf("_") != -1 ){
        document.getElementById("Ltaker").innerHTML = "You lose! You're garbage!";
        document.getElementById("image").innerHTML = "<img src='img/NoExtraGarb_cc.png' width='300' height='200'/>";
        document.getElementById("playAgain").innerHTML = "Click 'Play' to play again!"
        document.getElementById("aButton").disabled = true;

    }
    if(printWord().indexOf("_") == -1){
        document.getElementById("Phatdub").innerHTML = "You win! You're one smart cookie!";
        document.getElementById("image").innerHTML = "<img src='img/SmartCookie.png' width='300' height='200'/>";
        document.getElementById("playAgain").innerHTML = "Click 'Play' to play again!"
        document.getElementById("aButton").disabled = true;

    }

    //document.getElementById("underline").innerHTML = displayGuess;
}

