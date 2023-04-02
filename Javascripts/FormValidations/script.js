window.addEventListener("load", init);

var boxes;
var span;
function init() {
    var submitButton = document.querySelector("#btn_2");
    submitButton.addEventListener("click", validateForm);

    // var username = document.querySelector("#box_1");
    // username.addEventListener("blur", validateName);

    boxes = document.querySelectorAll("input");
    span = document.querySelectorAll(".err");

    for(var box of boxes) {
        box.addEventListener("blur", checkBlank);
    }

    // for(var box of boxes) {
    //     box.addEventListener("change", checkBlank);
    // }

    document.querySelector("#box_2").addEventListener("change", checkUsername);
    document.querySelector("#box_4").addEventListener("keyup", checkPasswordStrength);
}

function validateForm() {
    // for(var box of boxes) {
    //     if(box.value == "") {
    //         box.style.border = "1px solid red";
    //     }
    //     else {
    //         box.style.border = "1px solid green";
    //     }
    // }

    for(var i = 0; i < boxes.length; i++) {
        if(boxes[i].value == "") {
            boxes[i].style.border = "1px solid red";
            span[i].innerHTML = "Please Enter Something";
        }
        else {
            boxes[i].style.border = "1px solid green";
            span[i].innerHTML = "";
        }
    }
}


function checkBlank() {
    if(this.value == "") {
        this.style.border = "1px solid red";
    }
    else {
        this.style.border = "1px solid green";
    }
}


function checkUsername() {
    console.log("Checking username...");
    var usernames = ["ravi","ravi_01","ravi_07"];
    var profileMsgSpan = document.querySelector("#profile_msg");
    for(var i = 0; i < usernames.length; i++) {
        if(this.value == usernames[i]) {
            console.log("Username already taken...");
            profileMsgSpan.innerHTML = "Username already taken...";
            break;
        }
        else {
            profileMsgSpan.innerHTML = "";
        }
    }
}

function checkPasswordStrength() {
    var password = this.value;
    // console.log(password);
    var pwd_span = document.querySelector("#pwd_strength");
    // pwd_span.innerHTML = password;
    if(password.length == 0) {
        pwd_span.innerHTML = "Please Enter your Password...";
    }
    else if(password.length > 0 && password.length < 5) {
        pwd_span.innerHTML = "Weak Password";
    }
    else if(password.length >=5 && password.length < 8) {
        pwd_span.innerHTML = "Average Password";
    }
    else {
        pwd_span.innerHTML = "Strong Password";
    }
}