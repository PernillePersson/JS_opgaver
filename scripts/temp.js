function cConvert(){
    let c = document.getElementById("celsius").value
    //°F = °C x 1,8 + 32
    let f = Number(c * 1.8 + 32);
    document.getElementById("fahrenheit").value = f;
}

function fConvert(){
    let f = document.getElementById("fahrenheit").value
    //°C = (°F – 32) / 1,8
    let c = Number((f - 32) / 1.8);
    document.getElementById("celsius").value = c;
}