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

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
          todoList.splice(${i}, 1);
          renderTodoList();
        " class="delete-todo-button">
          Delete
        </button>
    `;
    todoListHTML += html;
  }

  document.querySelector(".js-content").innerHTML = todoListHTML;
}

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
