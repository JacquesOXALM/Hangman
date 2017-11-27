
alphabet= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",",p","q","r","s","t","u","v","w","x","y","z"];
Animals= ["Gorilla", "Elephant", "Shark"];
Difficult= ["Plethora","Xylophone", "Catatonic", "Disagreement", "Gigabyte"];
Cheeses= ["Brie", "Manchego", "Gruyere", "Mozzarella", "Parmesan"];
Footballers= ["Mbappe", "Messi", "Lemar", "Varane", "Koscielny", "Lloris"];
document.getElementById("word").innerHTML = chooseWords();
document.getElementById("underline").innerHTML = startGame();
categories= [Animals, Difficult, Cheeses, Footballers];
var category = categories[document.getElementById("word").value];
var cat = parseInt(category);



function startGame(){
    if(cat==1){
       word = Animals[Math.floor(Math.random() * Animals.length];
    }else if(cat==2){

    }

    var displayedLetters = "";
    for (var i=0; i<categories.length; i++){
        displayedLetters += "_ ";
    }
    document.getElementById("underline").innerHTML = displayedLetters;
}

