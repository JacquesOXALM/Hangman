

var Animals= ["gorilla", "elephant", "shark"];
var Difficult= ["plethora","xylophone", "catatonic", "disagreement", "gigabyte"];
var Cheeses= ["brie", "manchego", "gruyere", "mozzarella", "parmesan"];
var Footballers= ["mbappe", "messi", "lemar", "varane", "koscielny", "lloris"];
var categories= [Animals, Difficult, Cheeses, Footballers];
var word="";
var guessesLeft= 15;
var guessedLetter = [];
var displayedLetters = "";

function toStart(){
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
    document.getElementById("guessesLeft").innerHTML = "Guesses Remaining: " + 15;
    document.getElementById("playAgain").innerHTML = "";
    document.getElementById("image").innerHTML = "";
    displayedLetters = "";
    for (var i=0; i< guessedLetter.length; i++){
        document.getElementById("letter").innerHTML += "<option value=" + guessedLetter[i]+ ">" + guessedLetter[i] +"</option>";
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


    }
    if(printWord().indexOf("_") == -1){
        document.getElementById("Phatdub").innerHTML = "You win! You're one smart cookie!";
        document.getElementById("image").innerHTML = "<img src='img/SmartCookie.png' width='300' height='200'/>";
            document.getElementById("playAgain").innerHTML = "Click 'Play' to play again!"


    }

    //document.getElementById("underline").innerHTML = displayGuess;
}

