const todoList = document.querySelector(".list");
const dellta = document.querySelector(".trash")
const filterOption = document.querySelector(".filt1");
const tasks = document.querySelector(".mess-item");

document.addEventListener("DOMContentLoaded", getLocalTodos);
todoList.addEventListener("click", deleteCheck);
/*filterOption.addEventListener("change", filterTodo);*/

function getLocalTodos() {
	let todos;
	if(localStorage.getItem("todos") === null) {
		todos = [];
	}else{
		todos = JSON.parse(localStorage.getItem("todos"));
	}
	taskCounter();
	todos.forEach(function(todo){
		const todoDiv = document.createElement("div");
		todoDiv.classList.add("list-item");
		const btns = document.createElement("button");
		btns.innerHTML = '<img src="../img/basket.svg" alt="basket" class = "trash">'
		btns.classList.add("trash");
		btns.classList.add("buttons");
		const workBody = document.createElement("label");
		
		const fakie = document.createElement("span");
		const newTodo = document.createElement("span");
		newTodo.innerText = todo;
		newTodo.classList.add("span");
		fakie.classList.add("fake");
		todoDiv.appendChild(workBody);
		workBody.innerHTML = '<input type="checkbox" class="checkbox"/>'
		workBody.appendChild(fakie);
		workBody.appendChild(newTodo);
		todoDiv.innerHTML+='<i class="fa-thin fa-pipe pipe"></i>' ;
		todoDiv.appendChild(btns);
		todoList.appendChild(todoDiv);
	})
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

function deleteCheck(e) {
	const item = e.target;
	console.log(item.classList);
	if(item.classList[0] === "trash"){
	const todo = item.parentElement.parentElement;
	
	removeLocalTodos(todo);
	taskCounter();
	}
	
}

function removeLocalTodos(todo) {
	let todos;
	if(localStorage.getItem("todos") === null) {
		todos = [];
	}else{
		todos = JSON.parse(localStorage.getItem("todos"));
	}
	const todoIndex = todo.children[0].innerText;
	console.log(todo.children[0]);	
	todos.splice(todos.indexOf(todoIndex),1);
	localStorage.setItem("todos", JSON.stringify(todos));
	todo.remove();
}


