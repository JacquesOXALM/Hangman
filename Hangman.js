

var Animals= ["Gorilla", "Elephant", "Shark"];
var Difficult= ["Plethora","Xylophone", "Catatonic", "Disagreement", "Gigabyte"];
var Cheeses= ["Brie", "Manchego", "Gruyere", "Mozzarella", "Parmesan"];
var Footballers= ["Mbappe", "Messi", "Lemar", "Varane", "Koscielny", "Lloris"];
// document.getElementById("word").innerHTML = chooseWord();
// document.getElementById("underline").innerHTML = chooseWord();
var categories= [Animals, Difficult, Cheeses, Footballers];
var word="";
var guessesLeft= 15;
var guessedLetter = [];
var displayedLetters = "";

function chooseWord() {
    var x = document.getElementById("categories").value;
    var category = categories[x];
    console.log(categories);
    word = category[Math.floor(Math.random() * category.length)];


    for (var i = 0; i < word.length; i++) {
        displayedLetters += "_ ";
    }
    console.log(word);
    document.getElementById("underline").innerHTML = displayedLetters;
}

function guessLetter(){
    var x= document.getElementById("letter");
    var guess = document.getElementById("letter").value;
    guessedLetter.push(guess);
    var displayGuess= "";
    for(var i = 0; i < word.length; i++){
        if(guessedLetter.indexOf(word[i]) > -1){
            displayGuess += word[i] + " ";
            x.remove(x.selectedIndex);
        }else{
            displayGuess += "_ ";
        }
    }
    guessesLeft --;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    if(guessesLeft==0){
        document.getElementById("Ltaker").innerHTML = "You're Garbage" + url;

    }
    document.getElementById("underline").innerHTML = displayGuess;
}

