guessedNum = 0;
correctNum = Math.floor(Math.random() * 100);
tries = 1;
function guess(){
    guessedNum = document.getElementById("num").value;
    respond();
    document.getElementById("gættedetal").textContent += " " + guessedNum + ",";
}

function respond(){
    if (guessedNum < correctNum){
        document.getElementById("respons").textContent = "Tallet var for lavt. Prøv igen.";
        tries ++;
    }
    if (guessedNum > correctNum){
        document.getElementById("respons").textContent = "Tallet var for højt. Prøv igen.";
        tries ++;
    }
    if (guessedNum == correctNum){
        document.getElementById("respons").textContent = "Du gættede rigtigt! Du brugte " + tries + " forsøg";
    }
}

function reset(){
    guessedNum = 0;
    correctNum = Math.floor(Math.random() * 100);
    tries = 1;
    document.getElementById("gættedetal").textContent = "Gættede tal:";
    document.getElementById("respons").textContent = " ";
}