const addBtn = document.getElementById("add");

let todos = JSON.parse(localStorage.getItem("todos"));

// Check if todos exists and is an array
if (!todos || !Array.isArray(todos)) {
  todos = []; // Initialize empty array if nothing in storage
}

addBtn.addEventListener("click", function() {
  let todo_input = document.getElementById("todo_input").value;
  let todo_type = document.getElementById("Type").value;

  let new_todo = {
    todo: todo_input,
    type: todo_type,
    id: Date.now(),
    progress: "in-progress",
  };

  todos.push(new_todo);
  localStorage.setItem("todos", JSON.stringify(todos));

  //   location.reload();
  render(new_todo);

  console.log(todos);
})

function updateProgress(event) {
  let id = 0;

  if (
    event.target.classList.contains("right") ||
    event.target.classList.contains("cancel")
  ) {
    id = event.target.parentElement.dataset.id;
    console.log(id);
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
        if (event.target.classList.contains("right")) {
          todos[i].progress = "done";
          console.log(todos[i]);
          render(todos[i])
        }
        
        else if (event.target.classList.contains("cancel")) {
            deleteTodo(id);
          todos = todos.filter((todo) => todo.id !== Number(id));
        }

        localStorage.setItem("todos", JSON.stringify(todos));
        location.reload();
        break;
      }
    }
  }
}

// renderAll
renderAll(todos);

document.addEventListener("click", function (event){
    updateProgress(event);
})