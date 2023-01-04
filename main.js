window.addEventListener('load', () => {
  const form = document.querySelector("#newTask");
  const input = document.querySelector("#newTaskInput");
  const listElement = document.querySelector("#tasks");

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("Please fill out the task")
      return
    }

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const taskContent = document.createElement("div");
    taskElement.classList.add("content");

    taskElement.appendChild(taskContentElement);

    const taskInput = document.createElement("input");
    taskInput.classList.add("text");
    taskInput.type = "text";
    taskInput.value = task;
    taskInput.setAttribute("readonly","readonly");

    taskContent.appendChild(taskInputElement);

    //buttons

    const taskAction = document.createElement("div");
    taskAction.classList.add("actions");

    const taskEdit = document.createElement("button");
    taskEdit.classList.add("edit");
    taskEdit.innerHTML = "Edit"

    const taskDelete = document.createElement("button");
    taskDelete.classList.add("delete");
    taskDelete.innerHTML = "Delete"

    taskActions.appendChild(taskEdit);
    taskActions.appendChild(taskDelete);

    taskElement.appendChild(taskActions);

    listElement.appendChild(taskElement);

    input.value = "";

    taskEdit.addEventListener('click', () => {
      if (taskEdit.innerText.toLowerCase() == "edit") {
        taskInput.removeAttribute("readonly");
        task.focus();
        taskEdit.innerText = "Save"
      }
      else {
        taskInput.setAttribute("readonly", "readonly");
        taskEdit.innerText = "Edit";
      }

    });
    
    taskDelete.addEventListener('click', () => {
      listElement.removeChild(taskElement);
    });

  })
})