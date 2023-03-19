window.addEventListener("load", initEvents);

function initEvents() {
    fnum = document.querySelector("#box_1");
    snum = document.querySelector("#box_2");
    // document.getElementById("add").addEventListener("click", add);
    document.querySelector("#add").addEventListener("click", add);
    document.querySelector("#sub").addEventListener("click", sub);
    document.querySelector("#div").addEventListener("click", div);
    document.querySelector("#mul").addEventListener("click", mul);
}

function add() {
    // Addition of two number
    var result = parseInt(fnum.value) + parseInt(snum.value);
    document.querySelector("#box_3").value = result;
}

function sub() {
    // Subtraction of two number
    var result = fnum.value - snum.value;
    document.querySelector("#box_3").value = result;
}

function div() {
    // Division of two number
    var result = parseInt(fnum.value) / parseInt(snum.value);
    document.querySelector("#box_3").value = result;
}

function mul() {
    // Multiplication of two number
    var result = parseInt(fnum.value) * parseInt(snum.value);
    document.querySelector("#box_3").value = result;
}
