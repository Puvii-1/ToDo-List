const todos = [];
const todoInput  = document.getElementById("todo-input");
const todosWrapperr = document.getElementById("todos-wrapper");

function addtodo(){
    const todovalue = todoInput.value;
    todos.push(todovalue);


    let htmlToAdd = "";
    for(let i = 0; i< todos.length; i++){
        htmlToAdd = htmlToAdd + `<div class="todo">
        <p>${todos[i]}</p>
        <button class="mark-as-done-btn">Mark as Done</button>
        <button class="delete-btn">Delete todo</button>
      </div>`;
        
    }

    todosWrapperr.innerHTML = htmlToAdd;
}