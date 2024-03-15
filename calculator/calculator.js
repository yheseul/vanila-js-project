const $ = (id) => document.getElementById(id);
const $number = document.querySelectorAll('.number');
const $operator = document.querySelectorAll('.operator');

let leftOperand = '';
let rightOperand = '';
let operator = '';

numberClickEvent = (event) => {
  const clickedNumber = event.target.innerText;
  if(operator === '') createLeftOperand(clickedNumber);
  if(operator !== '') createRightOperand(clickedNumber);
}

createLeftOperand = (clickedNumber) => {
  $('result').innerText += clickedNumber;
  let currentNumber = $('result').innerText;
  leftOperand = currentNumber;
  calculationProcess(clickedNumber);
}

createRightOperand = (clickedNumber) => {
  $('result').innerText += clickedNumber;
  let currentNumber = $('result').innerText;
  rightOperand = currentNumber;
  calculationProcess(clickedNumber);
}

operatorClickEvent = (event) => {
  const clickedOperator = event.target.innerText;
  operator = clickedOperator;
  if(clickedOperator === "=") calculationResult();
  else calculationProcess(clickedOperator);
  $('result').innerText = '';
}

calculationProcess = (clickedButton) => {
  $('calculationProcessWindow').innerText += clickedButton;
}

$number.forEach((number) => {
  number.addEventListener("click", (event) => {
    numberClickEvent(event);
  })
})

$operator.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    operatorClickEvent(event);
  })
})
