const $toDoInput = document.getElementById('toDoInput');
const $addButton = document.getElementById('addButton');
const $toDoList = document.getElementById('toDoList');
const $remainingDoCount = document.getElementById('remainingDoCount');

addToDoList = (event) => {
  event.preventDefault();
  createToDoList();
  $toDoInput.value = "";
}

createToDoList = () => {
  const liElement = document.createElement("li");
  const newToDo = $toDoInput.value;
  const todoCheckbox = document.createElement('input');

  liElement.style.listStyle = "none";
  todoCheckbox.setAttribute("type", "checkbox");
  liElement.className = "newToDoList";
  todoCheckbox.className = "todoCheckbox";

  if(!newToDo){
    alert("Please enter the content!");
  }
  else{
    liElement.append(todoCheckbox, newToDo);
    $toDoList.appendChild(liElement);
    increasedRemainingDoCount();
  }
}

increasedRemainingDoCount = () => {
  const CurrentRemainingDoCount = parseInt($remainingDoCount.innerHTML, 10);
  $remainingDoCount.innerHTML = CurrentRemainingDoCount + 1;
}

$addButton.addEventListener('click', addToDoList);