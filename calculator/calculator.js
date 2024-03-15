const $ = (id) => document.getElementById(id);
const $number = document.querySelectorAll('.number');


numberClickEvent = (event) => {
  $('result').innerHTML += event.target.innerText;
}

$number.forEach((number) => {
  number.addEventListener("click", (event) => {
    numberClickEvent(event);
  })
})
