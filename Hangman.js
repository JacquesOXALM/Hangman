
alphabet= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",",p","q","r","s","t","u","v","w","x","y","z"];
secretwords= ["stanza", "anagrams", "gorilla", "cheese", "mbappe", "messi"];
function startGame(){
    document.getElementById("underline").innerHTML = "";

    secretwords= secretwords[Math.floor(Math.random()*secretwords.length)];
    var displayedLetters = "";
    for (var i=0; i<secretwords.length; i++){
        displayedLetters = "_";
    }
    document.getElementById("underline").innerHTML = displayedLetters;

}

function Hangman(){
    letter = document.getElementById("letter").value;
    document.getElementById("Guess").innerHTML = letter;
}






function response(){
    for (var i=0; i<alphabet.length-1; i++) {
        if (alphabet[i]==letter) {
            return letter;
        }else{
            return "Please enter a letter.";
        }
    }
}

