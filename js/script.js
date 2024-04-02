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
  let result;
  switch (operator) {
    case "+":
      console.log(add(Number(firstNumber), Number(secondNumber)));
      result = add(Number(firstNumber), Number(secondNumber));
      break;
    case "-":
      console.log(subtract(firstNumber, secondNumber));
      result = subtract(firstNumber, secondNumber);
      break;
    case "*":
      console.log(multiply(firstNumber, secondNumber));
      result = multiply(firstNumber, secondNumber);
      break;
    case "/":
      console.log(divide(firstNumber, secondNumber));
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

  let addButton = document.querySelector("#add");
  addButton.addEventListener("click", updateOperator);
  let subtractButton = document.querySelector("#subtract");
  subtractButton.addEventListener("click", updateOperator);
  let multiplyButton = document.querySelector("#multiply");
  multiplyButton.addEventListener("click", updateOperator);
  let divideButton = document.querySelector("#divide");
  divideButton.addEventListener("click", updateOperator);

  let equalsButton = document.querySelector("#equals");
  equalsButton.addEventListener("click", printResult);
}

function updateDisplay() {
  if (display.textContent === "0") {
    display.textContent = "";
  }
  display.textContent += this.textContent;
}

function updateOperator() {
  firstNumber = display.textContent;
  operator = this.textContent;
  display.textContent = "";
  console.log(firstNumber, operator);
}

function printResult() {
  if (firstNumber === "" || operator === "") {
    return;
  }
  secondNumber = display.textContent;
  display.textContent = operate(firstNumber, secondNumber, operator);
}

init();
