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
    document.getElementById("result").value = "";
    firstdigit = result;
}

function solve(){
    result = document.getElementById("result").value;
    if (metode == 0){
        add()
    }
    if (metode == 1){
        subtract()
    }
    if (metode == 2){
        multiply()
    }
    if (metode == 3){
        divide()
    }
    document.getElementById("result").value = result;

}

function add(){
    result = Number(firstdigit) + Number(result);
}

function subtract(){
    result = Number(firstdigit) - Number(result);
}

function multiply(){
    result = Number(firstdigit) * Number(result);
}

function divide(){
    result = Number(firstdigit) / Number(result);
}