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

let firstNumber = "";
let secondNumber = "";
let operator = "";
let display = document.querySelector(".display");
let result = false;
let midOperation = false;

function operate(firstNumber, secondNumber, operator) {
  let result;
  switch (operator) {
    case "+":
      result = add(Number(firstNumber), Number(secondNumber));
      break;
    case "-":
      result = subtract(firstNumber, secondNumber);
      break;
    case "*":
      result = multiply(firstNumber, secondNumber);
      break;
    case "/":
      result = divide(firstNumber, secondNumber);
      break;
  }
  return result;
}

function clear() {
  display.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  operator = "";
}

function init() {
  let clearButton = document.querySelector("#clear");
  clearButton.addEventListener("click", clear);

  let buttons = document.querySelectorAll(".button");
  buttons.forEach((number) => {
    if (!isNaN(number.textContent)) {
      number.addEventListener("click", updateDisplay);
    }
  });

  let operators = document.querySelector(".operators").childNodes;
  operators.forEach((num) => num.addEventListener("click", updateOperator));

  let equalsButton = document.querySelector("#equals");
  equalsButton.addEventListener("click", printResult);
}

function updateDisplay() {
  if (result) {
    result = false;
    display.textContent = 0;
  }

  if (midOperation) {
    midOperation = false;
    display.textContent = "";
  }
  if (display.textContent === "0") {
    display.textContent = "";
  }
  display.textContent += this.textContent;
}

function updateOperator() {
  if (firstNumber && operator) {
    secondNumber = display.textContent;
    display.textContent = operate(firstNumber, secondNumber, operator);
    secondNumber = "";
  }

  firstNumber = display.textContent;
  operator = this.textContent;
  midOperation = true;
}

function printResult() {
  if (firstNumber === "" || operator === "") {
    return;
  }
  secondNumber = display.textContent;
  display.textContent = operate(firstNumber, secondNumber, operator);
  firstNumber = "";
  operator = "";
  result = true;
}

init();
