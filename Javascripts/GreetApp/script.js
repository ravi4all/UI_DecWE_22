// Event binding
// so it means first window will load HTML then it will call initEvent()
window.addEventListener("load", initEvent);

function initEvent() {
    // We bind button with greetUser method
    // so button will wait to be clicked
    // once user will click on button it will call greetUser
    // callback
    document.getElementById("btn").addEventListener("click", greetUser);
}

function greetUser() {
    // here we fetch value of textbox and put it in username variable
    username = document.getElementById("box").value;
    // set the value of textbox inside span(result)
    document.getElementById("result").innerHTML = username;
}