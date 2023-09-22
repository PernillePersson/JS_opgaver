function dkkConvert(){
    let dk = document.getElementById("DKK").value
    let eu = Number(dk / 7.5);
    document.getElementById("EURO").value = eu;
}

function euroConvert(){
    let eu = document.getElementById("EURO").value
    let dk = Number(eu * 7.5);
    document.getElementById("DKK").value = dk;
}