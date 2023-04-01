window.addEventListener("load", initEvent);

var table;
var btns;
var counter = 0;
function initEvent() {
    table = document.querySelector("#board");
    board();
}

function board() {
    for(var i = 0; i < 3; i++) {
        var tr = table.insertRow();
        for(var j = 0; j < 3; j++) {
            var td = tr.insertCell();
            var button = document.createElement("button");
            td.appendChild(button);
            button.className = "btn";
            button.addEventListener("click", userMove);
        }
        table.appendChild(tr);
    }
    btns = document.querySelectorAll(".btn");
}

function userMove() {
    this.innerHTML = "X";
    counter++;
    cpuMove();
}

function cpuMove() {
    var index = parseInt(Math.random() * 9);
    if(btns[index].innerHTML == "") {
        btns[index].innerHTML = "0";
        counter++;
        console.log(counter);
    }
    else {
        if(counter < 9) {
            cpuMove();
        }
    }        
}