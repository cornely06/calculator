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
function countDecimals(value) {
    if ((value % 1) != 0) {
        return value.toString().split(".")[1].length;
    }
    return 0;
}
function operate(operator, a, b) {
    let deciA = countDecimals(a);
    let deciB = countDecimals(b);
    return parseFloat(operator(Number(a), Number(b)).toFixed(deciA + deciB));
}

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

let firstNum = "";
let tracker = 0;
let result = 0;
let currentOpperator = null;
let display = document.querySelector("#output");
document.querySelectorAll(".num").forEach(item => item.addEventListener("click", function() {
    if ((currentOpperator != null && tracker !== 0) || result !== 0) {
        display.textContent = "";
        tracker = 0;
        result = 0;
    }
    display.textContent += this.textContent;
}))
document.querySelector("#decimal").addEventListener("click", function() {
    if (display.textContent.indexOf(".") === -1) {
        display.textContent += this.textContent;
    }
})
document.querySelector("#clear").addEventListener("click", function() {
    display.textContent = "";
    firstNum = "";
    tracker = 0;
    currentOpperator = null;
})
document.querySelectorAll(".math").forEach(item => item.addEventListener("click", function() {
    if (currentOpperator !== null) {
        firstNum = operate(window[currentOpperator], firstNum, display.textContent);
        display.textContent = firstNum;
    }
    firstNum = display.textContent;
    tracker = 1;
    currentOpperator = this.getAttribute("id");
}))
document.querySelector("#equals").addEventListener("click", function() {
    if (currentOpperator === "divide" && display.textContent == 0) {
        display.textContent = "Error. Can't divide by zero, bud.";
    } else if (currentOpperator !== null) {
        firstNum = operate(window[currentOpperator], firstNum, display.textContent);
        display.textContent = firstNum;
    }
    firstNum = "";
    result = 1;
    currentOpperator = null;
})
document.querySelector("#backspace").addEventListener("click", function() {
    display.textContent = display.textContent.slice(0, -1);
})

/*
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
    if (a != undefined && operator != undefined) {
        a = Number(operate(window[operator], a, display.textContent));
        return;
    }
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
*/