window.addEventListener("load", init);

var textBox;
var boxValue;
function init() {
    textBox = document.querySelector("input");
    textBox.setAttribute("readonly", true);
    var btns = document.querySelectorAll(".num");
    for (var btn of btns) {
        btn.addEventListener("click", appendNum);
    }

    var oprs = document.querySelectorAll(".opr");
    for (var opr of oprs) {
        opr.addEventListener("click", appendOperator);
    }
}

function appendNum() {
    textBox.value += this.innerHTML;
    boxValue = textBox.value;
}

function appendOperator() {
    textBox.value = boxValue + this.innerHTML;
}