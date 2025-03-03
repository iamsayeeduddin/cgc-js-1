const addTask = () => {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value;

  if (taskText === "") {
    alert("Please Enter a task!");
    return;
  }

  let taskList = document.getElementById("taskList");
  let li = document.createElement("li");
  li.textContent = taskText;
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";
};
