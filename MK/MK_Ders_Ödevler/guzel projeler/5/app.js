// Selectors
const itemInputEl = document.querySelector("#todo-item-input");
const descriptionInputEl = document.querySelector("#todo-description-input");
const addTaskUl = document.querySelector(".add-task-ul");

// Date Selectors
const dateEl = document.querySelector(".date");

// Time Selectors
const clockEl = document.querySelector(".clock");
const minutesEl = document.querySelector(".minutes");
const ampmEl = document.querySelector(".am-pm");

// Button Selectors
const addTaskBtnEl = document.querySelector(".add-task-btn");

// Error Selectors
const errorMessage = document.querySelector(".errorMessage");

// Error Box
function error(msg) {
  errorMessage.innerHTML = `${msg}`;
  errorMessage.style.left = "0";
  setTimeout(() => {
    errorMessage.style.left = "-1000px";
  }, 3000);
}

// Modal Selectors
const modalEl = document.querySelector(".modal-container");
const modalBtn = document.querySelector("#modal-ok");

// LocalStorage Setting
let todos = JSON.parse(localStorage.getItem("TODOS")) || [];
// console.log(todos);

// make of render
const renderSavedTodos = () => {
  todos.forEach((todo) => {
    createItemElement(todo);
  });
};
renderSavedTodos();

addTaskBtnEl.addEventListener("click", () => {
  if (itemInputEl.value.trim() === "") {
    error("You Must Add Task Item 🎇");
  } else if (descriptionInputEl.value.trim() === "") {
    error("You Must Add Description Item 🎇");
  } else {
    const newTask = {
      id: new Date().getTime(),
      task: itemInputEl.value,
      description: descriptionInputEl.value,
      completed: false,
    };

    createItemElement(newTask);
    // Push the parameter you get from the function
    todos.push(newTask);

    // Make set of todos in localStorage
    localStorage.setItem("TODOS", JSON.stringify(todos));
    // console.log(todos);

    // empty the inputs
    itemInputEl.value = "";
    descriptionInputEl.value = "";
  }
});

// create element capturing
function createItemElement(newTask) {
  const { id, task, completed, description } = newTask; //destructing

  const taskLi = document.createElement("li");
  taskLi.setAttribute("id", id);
  taskLi.setAttribute("class", "taskItem");

  const leftDiv = document.createElement("div");
  leftDiv.setAttribute("class", "left-div");

  const rightDiv = document.createElement("div");
  rightDiv.setAttribute("class", "right-div");

  const taskLiDiv = document.createElement("div");
  taskLiDiv.setAttribute("class", "task-li-div");

  const descriptionLiDiv = document.createElement("div");
  descriptionLiDiv.setAttribute("class", "description-li-div");

  taskLi.appendChild(leftDiv);
  taskLi.appendChild(rightDiv);

  leftDiv.appendChild(taskLiDiv);
  leftDiv.appendChild(descriptionLiDiv);

  // newTask.completed ? taskLi.classList.add("checked") : "";
  newTask.completed && taskLi.classList.add("checked");

  //task div edit icon
  const editIconTask = document.createElement("i");
  editIconTask.setAttribute("class", "bi bi-pencil-square edit-icon-task");
  taskLiDiv.appendChild(editIconTask);

  //task div p
  const taskItemText = document.createElement("p");
  taskItemText.setAttribute("class", "task");

  const taskItemTextNode = document.createTextNode(task);
  taskItemText.appendChild(taskItemTextNode);
  taskLiDiv.appendChild(taskItemText);

  // description div edit icon
  const editIconDescription = document.createElement("i");
  editIconDescription.setAttribute(
    "class",
    "bi bi-pencil-square edit-icon-description"
  );
  descriptionLiDiv.appendChild(editIconDescription);

  // description div p
  const descriptionItemText = document.createElement("p");

  descriptionItemText.setAttribute("class", "description");

  const descriptionItemTextNode = document.createTextNode(description);
  descriptionItemText.appendChild(descriptionItemTextNode);
  descriptionLiDiv.appendChild(descriptionItemText);

  //trash icon
  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "bi bi-trash3");
  rightDiv.appendChild(deleteIcon);

  //complated icon
  const okIcon = document.createElement("i");
  okIcon.setAttribute("class", "bi bi-check-circle complated-icon");
  rightDiv.appendChild(okIcon);

  addTaskUl.appendChild(taskLi);
}

// event capturing
addTaskUl.addEventListener("click", (e) => {
  // console.log(e.target);

  const id = e.target.parentElement.parentElement.getAttribute("id");

  // Above the delete event button?
  if (e.target.classList.contains("bi-trash3")) {
    e.target.parentElement.parentElement.remove();
    //delete from local
    todos = todos.filter((todo) => todo.id !== Number(id));

    localStorage.setItem("TODOS", JSON.stringify(todos));
  } else if (e.target.classList.contains("bi-check-circle")) {
    e.target.parentElement.parentElement.classList.toggle("checked");
    todos.map((todo, index) => {
      if (todo.id == id) {
        todos[index].completed = !todos[index].completed;
      }
    });
    // console.log(todos)
    localStorage.setItem("TODOS", JSON.stringify(todos));
  } else if (e.target.classList.contains("edit-icon-task")) {
    e.target.classList.remove("bi", "bi-pencil-square");
    e.target.classList.add("bi", "bi-pencil");

    e.target.nextSibling.setAttribute("contenteditable", "true");
    console.log(e.target.nextSibling.innerText);
    // console.log(e.target.parentElement.parentElement.parentElement.getAttribute("id"))
    let id =
      e.target.parentElement.parentElement.parentElement.getAttribute("id");
    todosEdit = todos.filter((todo) => todo.id == Number(id));

    e.target.nextSibling.addEventListener("input", () => {
      todosEdit[0].task = e.target.nextSibling.innerText;
    });
    if (e.target.classList.contains("bi-pencil")) {
      todos = todos.filter((todo) => todo);
      localStorage.setItem("TODOS", JSON.stringify(todos));
    }
    // console.log(todos)
  } else if (e.target.classList.contains("edit-icon-description")) {
    e.target.classList.remove("bi", "bi-pencil-square");
    e.target.classList.add("bi", "bi-pencil");
    e.target.nextSibling.setAttribute("contenteditable", "true");
    console.log(e.target.nextSibling.innerText);

    let id =
      e.target.parentElement.parentElement.parentElement.getAttribute("id");
    todosEdit = todos.filter((todo) => todo.id == Number(id));

    e.target.nextSibling.addEventListener("input", () => {
      todosEdit[0].description = e.target.nextSibling.innerText;
    });
    if (e.target.classList.contains("bi-pencil")) {
      todos = todos.filter((todo) => todo);
      localStorage.setItem("TODOS", JSON.stringify(todos));
    }
    // console.log(todos)
  }
});

// keyboard enter click event
addTaskUl.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addTaskBtnEl.click();
  }
});

window.onload = function () {
  itemInputEl.focus();
  modalEl.classList.add("show");
};

modalBtn.addEventListener("click", () => {
  // console.log("modalı kapat")
  modalEl.style.display = "none";
});

// Date and Time
const date = new Date().toDateString();
dateEl.textContent = ` ${date}`;

clockEl.textContent =
  new Date().getHours() > 9
    ? (clockEl.textContent = new Date().getHours())
    : `0${(clockEl.textContent = new Date().getHours())}`;

const minutesCounterEl = new Date().getMinutes();
if (minutesCounterEl > 00 || minutesCounterEl > 13) {
  minutesEl.innerHTML = ` : ${minutesCounterEl} AM`;
} else {
  minutesEl.innerHTML = ` : ${minutesCounterEl} PM`;
}
