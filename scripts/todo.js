var liID = 10;

function check(id){
    document.getElementById(id).classList.toggle("checked");

}

function addTD(){
    let i = "l" + liID;
    let text = document.getElementById("newTD").value;
    let li = document.createElement("li");

    var span = document.createElement("SPAN");
    span.setAttribute("onclick", "removeTD('" + i +"')")
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    li.appendChild(document.createTextNode(text));
    li.setAttribute("id", i);
    li.classList.add("td");
    li.setAttribute("onclick", "check('" + i +"')");
    document.getElementById("myTD").appendChild(li);

    liID++;
}

function removeTD(id){
    document.getElementById(id).remove();
}

