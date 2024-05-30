function addTask() {
    var inputField = document.getElementById("taskInput");
    var taskValue = inputField.value.trim();

    if (taskValue !== "") {
        var taskList = document.getElementById("taskList");

        var taskItem = document.createElement("li");
        taskItem.textContent = taskList.getElementsByTagName("li").length + 1 + ". " + taskValue;

        taskItem.addEventListener("click", function() {
            this.classList.toggle("completed");
        });

        taskList.appendChild(taskItem);

        inputField.value = "";
    } else {
        alert("Please enter a task!");
    }
}
