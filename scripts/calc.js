var result = 0;
var firstdigit = 0;
var metode = 0;


// Function that display value
function tal(val) {
    document.getElementById("result").value += val;
}

// Function that clear the display
function clr() {
    document.getElementById("result").value = "";
    result = 0;
    firstdigit = 0;
    metode = 0;
}

function setMetode(x){
    result = document.getElementById("result").value;
    metode = x;
    clr();
    firstdigit = result;
}

function solve(){
    console.log(result)
    console.log(firstdigit)
    result = document.getElementById("result").value;
    console.log(result)
    if (metode = 0){
        add()
    }
    if (metode = 1){
        subtract()
    }
    if (metode = 2){
        multiply()
    }
    if (metode = 3){
        divide()
    }
    console.log(metode)
    document.getElementById("result").value = result;
    console.log(result)
}

function add(){
    result = result + firstdigit;
}

function subtract(){
    result = result - firstdigit;
}

function multiply(){
    result = result * firstdigit;
}

function divide(){
    result = result / firstdigit;
}