// To help render cards/todos
function render(todo) {
  let card = document.createElement("div");

  card.className = "mission_card";
  card.setAttribute("data-id", todo.id);

  card.textContent = todo.todo || "Untitled todo";
  // console.log(card);

  if (todo.progress == "done") {
    card.className = "mission_card done";
    let cancelBtn = document.createElement("button");
    cancelBtn.innerText = "❌";
    cancelBtn.setAttribute("class", "cancel");

    card.appendChild(cancelBtn);
  } else if (todo.progress == "in-progress") {
    card.className = "mission_card";
    let br = document.createElement("br");

    let doneBtn = document.createElement("button");
    doneBtn.innerText = "✅";
    doneBtn.setAttribute("class", "right");

    let cancelBtn = document.createElement("button");
    cancelBtn.innerText = "❌";
    cancelBtn.setAttribute("class", "cancel");

    card.appendChild(br);
    card.appendChild(doneBtn);
    card.appendChild(cancelBtn);
  }

  let container = document.getElementById(todo.type);
  container.appendChild(card);
}

// rendering Everything
function renderAll(todos) {
  for (let i = 0; i < todos.length; i++) {
    render(todos[i])
  }
}

// Delete cards using ids
function deleteTodo(id){
    const card = document.querySelector(`.mission_card[data-id="${id}"]`);
    if (card) {
      card.remove();
    }
}
