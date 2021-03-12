function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operate(operator, a, b) {
    return operator(a, b);
}
console.log(operate(add, 5, 2));

let numPad = function(){
    let digits = document.querySelector("#digits");
    let i = 1;
    while(i < 10) {
        let newNum = document.createElement("button");
        newNum.textContent = i;
        newNum.classList.add("num");
        digits.appendChild(newNum);
        i++;
    }
}
numPad();
let numbers = document.querySelectorAll(".num");
let display = document.querySelector("#output");
numbers.forEach(item => item.addEventListener("click", function() {
    display.textContent += item.textContent;
}))
document.querySelector("#clear").addEventListener("click", function() {
    display.textContent = "";
})