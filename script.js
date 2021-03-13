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
let tempDisplay;
numbers.forEach(item => item.addEventListener("click", function() {
    if (tempDisplay !== undefined) {
        display.textContent = "";
        tempDisplay = undefined;
    }
    display.textContent += item.textContent;
}))
document.querySelector("#clear").addEventListener("click", function() {
    display.textContent = "";
})

let operators = document.querySelectorAll(".math");
let a;
let b;
let operator;
operators.forEach(item => item.addEventListener("click", function() {
    a = Number(display.textContent);
    tempDisplay = a;
    display.textContent = a;
    operator = this.getAttribute("id");
}))
let equals = document.querySelector("#equals");
let countDecimals = function(value) {
    if ((value % 1) != 0) {
        return value.toString().split(".")[1].length;
    }
    return 0;
}
equals.addEventListener("click", function() {
    if (operator === undefined) {
        return;
    }
    b = Number(display.textContent);
    let deciA = countDecimals(a);
    let deciB = countDecimals(b);
    let result = Number(operate(window[operator], a, b).toFixed(deciA + deciB));
    operator = undefined;
    display.textContent = result;
})
// on click it saves current display
// have equal save 2nd display and apply function from operator button on them