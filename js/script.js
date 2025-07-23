document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const dateInput = document.getElementById("dateInput");
  const addBtn = document.getElementById("addBtn");
  const todoList = document.getElementById("todoList");
  const deleteAllBtn = document.getElementById("deleteAllBtn");

  let todos = [];

  function renderTodos() {
    todoList.innerHTML = "";
    if (todos.length === 0) {
      todoList.innerHTML = `<tr><td colspan="4" class="empty">No task found</td></tr>`;
      return;
    }

    todos.forEach((todo, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${todo.task}</td>
        <td>${todo.date}</td>
        <td>${todo.completed ? "Done" : "Pending"}</td>
        <td>
          <button onclick="toggleStatus(${index})">Toggle</button>
          <button onclick="deleteTodo(${index})" style="background:red">Delete</button>
        </td>
      `;
      todoList.appendChild(row);
    });
  }

  window.toggleStatus = function(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
  }

  window.deleteTodo = function(index) {
    todos.splice(index, 1);
    renderTodos();
  }

  addBtn.addEventListener("click", function () {
    const task = taskInput.value.trim();
    const date = dateInput.value;

    if (task === "" || date === "") {
      alert("Please enter both task and date.");
      return;
    }

    todos.push({ task, date, completed: false });
    taskInput.value = "";
    dateInput.value = "";
    renderTodos();
  });

  deleteAllBtn.addEventListener("click", function () {
    todos = [];
    renderTodos();
  });

  renderTodos();
});
