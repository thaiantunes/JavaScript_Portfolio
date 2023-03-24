var input = document.querySelector("input");
input.focus();
var chances = 1
var secretNumber = Math.round(Math.random() * 10);

function check() {
    if (input.value && input.value == secretNumber) {
        alert("You got it!");
        return
    }
    if (chances == 3) {
        alert("Failed! Refresh the page to restart");
        return
    } else {
        alert("Try again! " + (3 - chances) + " chances left!");
        input.value = "";
        input.focus();
        chances++
    }
}

var button = document.querySelector("button");

button.onclick = check;
