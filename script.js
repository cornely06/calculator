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

let operators = document.querySelectorAll(".math");
let a;
let b;
let operator;
operators.forEach(item => item.addEventListener("click", function() {
    a = Number(display.textContent);
    operator = this.getAttribute("id");
    console.log(operator);
    display.textContent = "";
}))
let equals = document.querySelector("#equals");
equals.addEventListener("click", function() {
    b = Number(display.textContent);
    let result = operate(window[operator], a, b);
    display.textContent = result;
})
// on click it saves current display
//have equal save 2nd display and apply function from operator button on them