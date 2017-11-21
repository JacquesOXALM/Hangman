
alphabet= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",",p","q","r","s","t","u","v","w","x","y","z"];
categories= ["Animals", "Difficult", "Cheeses", "Footballers"];
Animals= ["Gorilla", "Elephant", "Shark"];
Difficult= ["Plethora","Xylophone", "Catatonic", "Disagreement", "Gigabyte"];
Cheeses= ["Brie", "Manchego", "Gruyere", "Mozzarella", "Parmesan"];
Footballers= ["Mbappe", "Messi", "Lemar", "Varane", "Koscielny", "Lloris"];
document.getElementById("word").innerHTML = chooseWords();
document.getElementById("underline").innerHTML = startGame();

function chooseWords(){
     if(categories[3]==true){
         return Footballers[Math.floor(Math.random() * Footballers.length)];
     }else if(categories[2]==true){
         return Cheeses[Math.floor(Math.random() * Cheeses.length)];
     }else if(categories[1]==true){
         return Difficult[Math.floor(Math.random() * Difficult.length)];
     }else {
         return Animals[Math.floor(Math.random() * Animals.length)];
     }
}

function startGame(){
    var displayedLetters = "";
    for (var i=0; i<categories.length; i++){
        displayedLetters += "_ ";
    }
    document.getElementById("underline").innerHTML = displayedLetters;
}

