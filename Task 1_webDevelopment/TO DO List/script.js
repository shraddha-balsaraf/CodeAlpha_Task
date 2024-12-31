document.getElementById("addTaskButton").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();
  
    if (taskValue !== "") {
      const taskList = document.getElementById("taskList");
  
      const listItem = document.createElement("li");
      listItem.className = "task-item";
  
      listItem.innerHTML = `
        <span>${taskValue}</span>
        <button onclick="removeTask(this)">Delete</button>
      `;
  
      taskList.appendChild(listItem);
      taskInput.value = "";
    }
  });
  
  function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
  }
  



 
  