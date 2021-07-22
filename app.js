const text = document.getElementById("text")
const plus = document.getElementById("plus")
const ul = document.getElementById("ul")
const clear = document.getElementById("clearall")

var pending = 0

plus.addEventListener("click", function (event) {
    if (!text.value){
        alert("Enter your task")
    }else{
    event.preventDefault();
    const span = document.getElementById("span")
    const div = document.createElement("div");
    const li = document.createElement("li");
    const completedButton = document.createElement("button")
    const trash = document.createElement("button")
    completedButton.classList.add("completed-btn")
    trash.classList.add("trash-btn")
    div.classList.add("task");
    li.classList.add("tasks");
    completedButton.innerHTML ="<i class='fas fa-check'></i>"
    trash.innerHTML = "<i class='fas fa-trash'></i>";
    li.innerText = text.value;
    div.appendChild(li);
    div.appendChild(completedButton)
    div.appendChild(trash)
    ul.appendChild(div);
    pending++;
    span.innerText = pending;
    text.value = "";
}})
ul.addEventListener("click", function(e){
    const item = e.target;
    if (item.className==="trash-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("trushed");
        todo.addEventListener("transitionend",function(){
            todo.remove();
        });
        pending--;
        span.innerText = pending;
    };
    if (item.className==="completed-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    };
})
clear.addEventListener("click", function(){
    if (confirm("Are you sure?")){
        window.location.reload();
    }
})