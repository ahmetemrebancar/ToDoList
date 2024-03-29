document.getElementById("add-task").addEventListener("click", function (event) {
    event.preventDefault();
    addTask();
});





function addTask() {
    let task = document.getElementById("new-task");
    let tasksContainer = document.getElementById("tasks");
    if (task.value === " ") {
        alert("Lütfen bir görev girin.");
    }
    else {

        let newDiv = document.createElement("div");
        newDiv.innerHTML = task.value;
        newDiv.className = "task-style";

        tasksContainer.appendChild(newDiv);
        task.value = " ";
        let newButton = document.createElement("button");
        newButton.className = "delete-style";
        newButton.innerHTML = "Delete";
        newDiv.appendChild(newButton);
        let current_tasks = document.querySelectorAll(".delete-style");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }


    }
};

