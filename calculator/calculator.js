const $ = (id) => document.getElementById(id);
const $number = document.querySelectorAll('.number');
const $operator = document.querySelectorAll('.operator');

numberClickEvent = (event) => {
  $('result').innerText += event.target.innerText;
}

operatorClickEvent = (event) => {
  $('result').innerText = event.target.innerText;
}

$number.forEach((number) => {
  number.addEventListener("click", (event) => {
    numberClickEvent(event);
  })
})

$operation.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    operatorClickEvent(event);
  })
})
