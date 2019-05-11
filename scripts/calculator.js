const calculator = {
  displayValue: '0',
  firstOperand: null,
  secondOperand: false,
  operator: null
};

function inputValue(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue =
      displayValue === '0' ? digit : displayValue + digit;
  }

  console.log(calculator);
}

function inputDecimal(dot) {
  if (calculator.waitingForSecondOperand === true) return;

  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    console.log(calculator);
    return;
  }

  if (firstOperand == null) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const currentValue = firstOperand || 0;
    const result = performCalculation[operator](currentValue, inputValue);

    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
}

const performCalculation = {
  '÷': (firstOperand, secondOperand) => firstOperand / secondOperand,

  '×': (firstOperand, secondOperand) => firstOperand * secondOperand,

  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

  '=': (firstOperand, secondOperand) => secondOperand,

  '%': (firstOperand, secondOperand) => (firstOperand * secondOperand) / 100
};

function resetCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator);
}

function clearEntry() {
  calculator.displayValue = '0';
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
    handleOperator(target.value);
    calculatorDisplayUpdate();
    return;
  }

  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    calculatorDisplayUpdate();
    return;
  }

  if (target.classList.contains('clear')) {
    resetCalculator();
    calculatorDisplayUpdate();
    return;
  }

  if (target.classList.contains('clear-entry')) {
    clearEntry();
    calculatorDisplayUpdate();
    return;
  }

  if (target.classList.contains('equals')) {
    handleOperator(target.value);
    calculatorDisplayUpdate();
    return;
  }

  inputValue(target.value);
  calculatorDisplayUpdate();
});
