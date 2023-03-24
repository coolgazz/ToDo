const todoInput = document.querySelector(".input");
const todoButton = document.querySelector(".btn");
const cancelButton = document.querySelector(".cancel_button");
const tasks = document.querySelector(".mess-item");


todoButton.addEventListener("click", addTodo);
document.addEventListener("DOMContentLoaded", taskCounter);



function addTodo(event) {
	saveLocalTodos(todoInput.value);
}

function saveLocalTodos(todo) {
	let todos;
	if(localStorage.getItem("todos") === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem("todos"));
	}
	todos.push(todo);
	localStorage.setItem("todos", JSON.stringify(todos));
	taskCounter();
}


function taskCounter() {
	let todos;
	if(localStorage.getItem("todos") === null) {
		todos = [];
	}else{
		todos = JSON.parse(localStorage.getItem("todos"));
	}
	const delet = document.querySelector(".exercise");
	delet.remove();
	const task_counter = document.createElement("p");
	task_counter.classList.add("exercise");
	var numb = todos.length;
	if (numb === 1){
		task_counter.innerHTML = numb + " task you've got"
	}else{
		task_counter.innerHTML = numb + " tasks you've got"
	}
	
	tasks.appendChild(task_counter);
}