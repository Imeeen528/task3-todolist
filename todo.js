
////////////
const listeHTML = document.querySelector("ul");
const addButton = document.querySelector("button");
const inputTodo = document.querySelector("input");
const totalCounter = document.querySelector("#totalCounter");
const doneCounter = document.querySelector("#doneCounter");
//alert
let totalTodos = 0;
addButton.onclick = () => {
  addTodo();
};
inputTodo.onkeydown = (e) => {
  if (e.key == "Enter") {
    addTodo();
  }
};
document
  .querySelectorAll("*")
  .forEach((el) => el.addEventListener("mouseover", (e) => { }));

const addTodo = (e) => {
  if (!inputTodo.value.length) {
    alert("empty element");
    return false;
  }
  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  let input = document.createElement("input");
  input.setAttribute("value", inputTodo.value);
  input.style.border = "none";
  let saveButton = document.createElement("button");
  saveButton.innerText = "edit";
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", deleteTodo);
  checkbox.onclick = markAsDone;
  li.setAttribute("id", totalTodos);
  li.appendChild(checkbox);
  li.appendChild(input);
  li.appendChild(saveButton);
  li.appendChild(deleteButton);
  inputTodo.value = "";
  listeHTML.appendChild(li);
  totalTodos++;
  updateCounters();
};

const updateCounters = () => {
  totalCounter.innerText = totalTodos;
  let done = [...document.querySelectorAll("[type=checkbox]")].filter(
    (c) => c.checked
  ).length;
  console.log(done);
  doneCounter.innerText = done;
};

const deleteTodo = (e) => {
  e.target.parentNode.remove();
  console.log("delete clicked ");
};

function markAsDone(e) {
  updateCounters();
  e.target.parentElement.children[1].style.textDecoration = "line-through";
}