var form = document.getElementById("commandForm");
var input = document.getElementById("userInput");
var message = document.getElementById("message");
var runImage = document.getElementById("run");
var runData = {
    position: 0
};

form.onsubmit = function () {
    var text = input.value.trim();
    if (text === "") {
        message.innerHTML = "Please enter a command.";
        return false;
    }
    if (text.toLowerCase() === "go") {
        message.innerHTML = "Running!";
        moveRun();
    } else if (text.toLowerCase() === "stop") {
        message.innerHTML = "Stopped.";
    } else {
        message.innerHTML = "Invalid command. Type Go or Stop.";
    }
    return false;
};

function moveRun() {
    runData.position += 50;
    runImage.style.marginLeft = runData.position + "px";
}