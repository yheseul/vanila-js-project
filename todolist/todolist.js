const $toDoInput = document.getElementById('toDoInput');
const $addButton = document.getElementById('addButton');
const $toDoList = document.getElementById('toDoList');

addToDoList = (event) => {
  event.preventDefault();

  const newToDo = $toDoInput.value;
  const liElement = document.createElement('li');

  const creatingInputValueTextNode = document.createTextNode(newToDo);
  liElement.appendChild(creatingInputValueTextNode);
  $toDoList.appendChild(liElement);

  $toDoInput.value = " ";
}

$addButton.addEventListener('click', addToDoList);