let modeBtn = document.querySelector(".mode");
let body = document.querySelector("body");
let inputBox = document.getElementById("input_Box");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.className = "dark";
        inputBox.classList.add("dark");
    } else {
        currMode = "light";
        body.className = "light";
        inputBox.classList.remove("dark");
    }
    string = "";
    document.getElementById('input_Box').value = string;
    console.log("Mode: " + currMode);
});

let buttons = document.querySelectorAll('button');
let string = '';
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            document.getElementById('input_Box').value = string;
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            document.getElementById('input_Box').value = string;
        } else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1);
            document.getElementById('input_Box').value = string;
        } else {
            string += e.target.innerHTML;
            document.getElementById('input_Box').value = string;
        }
    })
});
