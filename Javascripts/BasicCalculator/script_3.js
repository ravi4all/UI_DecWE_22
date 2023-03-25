window.addEventListener("load", initEvents);

function initEvents() {
    fnum = document.querySelector("#box_1");
    snum = document.querySelector("#box_2");
    // document.getElementById("add").addEventListener("click", add);
    // document.querySelector("#add").addEventListener("click", calc);
    // document.querySelector("#sub").addEventListener("click", calc);
    // document.querySelector("#div").addEventListener("click", calc);
    // document.querySelector("#mul").addEventListener("click", calc);
    var btns = document.querySelectorAll("button");
    // for(var i = 0; i < btns.length; i++) {
    //     btns[i].addEventListener("click", calc);
    // }

    for (var btn of btns) {
        btn.addEventListener("click", calc);
    }
}

function calc() {
    // console.log(this.innerHTML);
    var operator = this.innerHTML;
    var expression = parseInt(fnum.value) + operator + parseInt(snum.value);
    // console.log(expression);
    var result = eval(expression);

    // if(operator == "+") {
    //     result = parseInt(fnum.value) + parseInt(snum.value);
    // }
    // else if(operator == "-") {
    //     result = parseInt(fnum.value) - parseInt(snum.value);
    // }
    // else if(operator == "/") {
    //     result = parseInt(fnum.value) / parseInt(snum.value);
    // }
    // else {
    //     result = parseInt(fnum.value) * parseInt(snum.value);
    // }
    document.querySelector("#box_3").value = result;
}
