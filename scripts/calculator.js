const calculator = {
  displayValue: '0',
  initialOperand: null,
  secondOperand: false,
  operator: null
};

function inputValue(digit) {
  const { displayValue } = calculator;
  calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}

function inputDecimal(dot) {
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
    return;
  }
}

function calculatorDisplayUpdate() {
  const display = document.querySelector('.calculator-display');
  display.value = calculator.displayValue;
}

calculatorDisplayUpdate();

const keypresses = document.querySelector('.calculator-keys');
keypresses.addEventListener('click', event => {
  const { target } = event;
  if (!target.matches('input')) {
    return;
  }

  if (target.classList.contains('operator')) {
    console.log('Operator', target.value);
    return;
  }

  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    calculatorDisplayUpdate();
    return;
  }

  if (target.classList.contains('clear')) {
    console.log('Clear', target.value);
    return;
  }

  if (target.classList.contains('clear-entry')) {
    console.log('Clear entry', target.value);
    return;
  }

  if (target.classList.contains('equals')) {
    console.log('Equals', target.value);
    return;
  }

  inputValue(target.value);
  calculatorDisplayUpdate();
});

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let divide = (a, b) => a / b;
function multiply(array) {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
}
