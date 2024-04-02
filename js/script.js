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

let firstNumber;
let secondNumber;
let operator;
let display = document.querySelector(".display");

function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      console.log(add(firstNumber, secondNumber));
      break;
    case "-":
      console.log(subtract(firstNumber, secondNumber));
      break;
    case "*":
      console.log(multiply(firstNumber, secondNumber));
      break;
    case "/":
      console.log(divide(firstNumber, secondNumber));
      break;
  }
}

function clear() {
  display.textContent = "";
}

function init() {
  let clearButton = document.querySelector("#clear");
  clearButton.addEventListener("click", clear);

  let buttons = document.querySelectorAll(".button");
  console.log(buttons);
  buttons.forEach((number) => {
    if (!isNaN(number.textContent)) {
      number.addEventListener("click", numberDisplay);
    }
  });
}

function numberDisplay() {
  console.log(this.textContent);
  display.textContent += this.textContent;
}

init();
