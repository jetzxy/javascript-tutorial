let todoList = [
  {
    name: "make dinner",
    dueDate: "29-07-2026",
  },
  {
    name: "wash dishes",
    dueDate: "29-07-2026",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button 
        " class="delete-todo-button js-delete-todo-button">
          Delete
        </button>
    `;
    todoListHTML += html;
  });

  document.querySelector(".js-content").innerHTML = todoListHTML;

  document
    .querySelectorAll(".js-delete-todo-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

const addTodoItem = document.querySelector(".js-add-todo-button");
addTodoItem.addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  const inputElemet = document.querySelector(".js-input");
  const name = inputElemet.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate,
  });
  inputElemet.value = "";

  renderTodoList();
}
