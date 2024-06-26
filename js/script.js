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
  if (b === "0") {
    return "to infinity and beyond";
  }
  return a / b;
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let display = document.querySelector(".display");
let result = false;
let midOperation = false;
let bigNumber = false;

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
  result = checkDecimals(result);
  return result;
}

function checkDecimals(number) {
  if (String(number).includes(".") && String(number).split(".")[1].length > 5) {
    return Math.round((number + Number.EPSILON) * 10000) / 10000;
  }
  return number;
}

function bigNum() {
  if (display.textContent.split("").length > 18) {
    display.textContent = "BIG NUM";
    bigNumber = true;
  }
}

function addDecimal() {
  if (bigNumber) {
    clear();
    return;
  }
  if (result) {
    result = false;
    display.textContent = 0;
    return;
  }
  if (display.textContent.includes(".")) {
    return;
  }
  display.textContent += ".";
}

function backspace() {
  if (bigNumber) {
    clear();
    return;
  }
  if (display.textContent.length) {
    let array = display.textContent.split("");
    array.pop();
    display.textContent = array.join("");
  }
}

function clear() {
  display.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  bigNumber = false;
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

  let decimal = document.querySelector("#decimal");
  decimal.addEventListener("click", addDecimal);

  let back = document.querySelector("#back");
  back.addEventListener("click", backspace);
}

function updateDisplay() {
  checkDisplay();
  display.textContent += this.textContent;
  bigNum();
}

function updateDisplayKeys(keyString) {
  checkDisplay();
  display.textContent += keyString;
  bigNum();
}

function checkDisplay() {
  if (bigNumber) {
    clear();
  }
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
}

function updateOperator() {
  checkUpdateOperator();
  operator = this.textContent;
}

function updateOperatorKeys(keyString) {
  checkUpdateOperator();
  operator = keyString;
}

function checkUpdateOperator() {
  if (bigNumber) {
    clear();
    return;
  }
  if (firstNumber && operator) {
    secondNumber = display.textContent;
    display.textContent = operate(firstNumber, secondNumber, operator);
    secondNumber = "";
  }

  firstNumber = display.textContent;
  midOperation = true;
}

function printResult() {
  if (bigNumber) {
    clear();
    return;
  }
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

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "Backspace":
      backspace();
      break;
    case "=":
    case "Enter":
      printResult();
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      updateOperatorKeys(e.key);
      break;
    case ".":
      addDecimal();
      break;
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      updateDisplayKeys(e.key);
      break;
  }
});
