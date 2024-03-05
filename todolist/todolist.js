const $toDoInput = document.getElementById('toDoInput');
const $addButton = document.getElementById('addButton');
const $toDoList = document.getElementById('toDoList');
const $remainingDoCount = document.getElementById('remainingDoCount');

addToDoList = (event) => {
  event.preventDefault();

  createToDoList();
  increasedRemainingDoCount();

  $toDoInput.value = "";
}

createToDoList = () => {
  const newToDo = $toDoInput.value;
  const liElement = document.createElement('li');

  liElement.style.listStyle = "none";

  const creatingInputValueTextNode = document.createTextNode(newToDo);
  liElement.appendChild(creatingInputValueTextNode);
  $toDoList.appendChild(liElement);
}

increasedRemainingDoCount = () => {
  const CurrentRemainingDoCount = parseInt($remainingDoCount.innerHTML, 10);
  $remainingDoCount.innerHTML = CurrentRemainingDoCount + 1;
}

$addButton.addEventListener('click', addToDoList);