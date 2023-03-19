window.addEventListener("load", initEvents);

function initEvents() {
    // document.getElementById("add").addEventListener("click", add);
    document.querySelector("#add").addEventListener("click", add);
    document.querySelector("#sub").addEventListener("click", sub);
    document.querySelector("#div").addEventListener("click", div);
    document.querySelector("#mul").addEventListener("click", mul);
}

function add() {
    // Addition of two number
    fnum = document.querySelector("#box_1").value;
    snum = document.querySelector("#box_2").value;
    result = parseInt(fnum) + parseInt(snum);
    document.querySelector("#box_3").value = result;
}

function sub() {
    // Subtraction of two number
    fnum = document.querySelector("#box_1").value;
    snum = document.querySelector("#box_2").value;
    result = fnum - snum;
    document.querySelector("#box_3").value = result;
}

function div() {
    // Division of two number
    fnum = document.querySelector("#box_1").value;
    snum = document.querySelector("#box_2").value;
    result = parseInt(fnum) / parseInt(snum);
    document.querySelector("#box_3").value = result;
}

function mul() {
    // Multiplication of two number
    fnum = document.querySelector("#box_1").value;
    snum = document.querySelector("#box_2").value;
    result = parseInt(fnum) * parseInt(snum);
    document.querySelector("#box_3").value = result;
}