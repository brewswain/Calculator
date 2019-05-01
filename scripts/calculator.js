const calculator = {
  displayValue: '0',
  initialOperand: null,
  secondOperand: false,
  operator: null
};

function calculatorDisplayUpdate() {
  const display = document.querySelector('.calculator-display');
  display.value = calculator.displayValue;
}

calculatorDisplayUpdate();

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let divide = (a, b) => a / b;
function multiply(array) {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
}

function operate(operator, num1, num2) {}
