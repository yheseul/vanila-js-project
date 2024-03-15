const $ = (id) => document.getElementById(id);
const $number = document.querySelectorAll('.number');
const $operation = document.querySelectorAll('.operation');

numberClickEvent = (event) => {
  $('result').innerText += event.target.innerText;
}

operationClickEvent = (event) => {
  $('result').innerText = event.target.innerText;
}

$number.forEach((number) => {
  number.addEventListener("click", (event) => {
    numberClickEvent(event);
  })
})

$operation.forEach((operation) => {
  operation.addEventListener("click", (event) => {
    operationClickEvent(event);
  })
})
