const $selectAllCheckbox = document.getElementById('selectAll');
const $toDoInput = document.getElementById('toDoInput');
const $addButton = document.getElementById('addButton');
const $deleteButton = document.getElementById('deleteButton');
const $toDoList = document.getElementById('toDoList');
const $remainingToDoCount = document.getElementById('remainingToDoCount');

addNewToDoList = (event) => {
  event.preventDefault();
  createNewToDoElement();
  $toDoInput.value = "";
}

createNewToDoElement = () => {
  const liElement = document.createElement('li');
  const toDoCheckbox = document.createElement('input');
  const toDoText = $toDoInput.value;

  liElement.style.listStyle = "none";
  toDoCheckbox.setAttribute("type", "checkbox");
  
  displayNewToDo(liElement, toDoCheckbox, toDoText);
}

displayNewToDo = (liElement, toDoCheckbox, toDoText) => {
  if(!toDoText) alert("Please enter the content!");
  if(toDoText) {
    liElement.append(toDoCheckbox, toDoText);
    $toDoList.appendChild(liElement);
    increasecountRemainingToDo();
  }
}

increasecountRemainingToDo = () => {
  const currentRemainingToDoCount = parseInt($remainingToDoCount.innerHTML, 10);
  $remainingToDoCount.innerHTML = currentRemainingToDoCount + 1;
}

$addButton.addEventListener("click", addNewToDoList);