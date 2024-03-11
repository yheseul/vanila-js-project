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
    increaseCountRemainingToDo();
  }
}

increaseCountRemainingToDo = () => {
  const currentRemainingToDoCount = parseInt($remainingToDoCount.innerHTML, 10);
  $remainingToDoCount.innerHTML = currentRemainingToDoCount + 1;
}

decreaseCountRemainingToDo = (numberDeletedToDo) => {
  const currentRemainingToDoCount = parseInt($remainingToDoCount.innerHTML, 10);
  $remainingToDoCount.innerHTML = currentRemainingToDoCount - numberDeletedToDo;
}

deleteToDoList = () => {
  const toDolist = $toDoList.querySelectorAll('li');
  const checkedboxes = $toDoList.querySelectorAll('input');
  let anyCheckboxChecked = false;

  for (let i in toDolist) {
    if (checkedboxes[i].checked) {
      anyCheckboxChecked = true;
      toDolist[i].remove();
      decreaseCountRemainingToDo(1);
    }
  }

  if(!anyCheckboxChecked){
    alert("Please select the list you want to delete.");
  }
}

$addButton.addEventListener("click", addNewToDoList);
$deleteButton.addEventListener("click", deleteToDoList);