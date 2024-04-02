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
  display.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  operator = "";
}

function updateVariables() {
  firstNumber = display.textContent;
  operator = this.textContent;
  display.textContent = "";
  console.log(firstNumber, operator);
}

function init() {
  let clearButton = document.querySelector("#clear");
  clearButton.addEventListener("click", clear);

  let buttons = document.querySelectorAll(".button");
  buttons.forEach((number) => {
    if (!isNaN(number.textContent)) {
      number.addEventListener("click", numberDisplay);
    }
  });

  let addButton = document.querySelector("#add");
  addButton.addEventListener("click", updateVariables);
  let subtractButton = document.querySelector("#subtract");
  subtractButton.addEventListener("click", updateVariables);
  let multiplyButton = document.querySelector("#multiply");
  multiplyButton.addEventListener("click", updateVariables);
  let divideButton = document.querySelector("#divide");
  divideButton.addEventListener("click", updateVariables);
}

function numberDisplay() {
  if (display.textContent === "0") {
    display.textContent = "";
  }
  display.textContent += this.textContent;
}

init();
