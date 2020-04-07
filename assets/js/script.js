var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {

    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "hello there";
    tasksToDoEl.appendChild(listItemEl);
};
formEl.addEventListener("submit", createTaskHandler);