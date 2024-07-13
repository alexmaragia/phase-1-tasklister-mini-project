document.addEventListener("DOMContentLoaded", () => {
  // Select the form and task list elements
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Add an event listener to the form
  form.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values from the input fields
    const taskDescription = document.getElementById("new-task-description").value;
    const priority = document.getElementById("priority").value;
    const dueDate = document.getElementById("due-date").value;

    // Create a new list item and add the task description to it
    const newTask = document.createElement("li");
    newTask.textContent = `${taskDescription} - Due: ${dueDate}`;

    // Set the color based on priority
    if (priority === "high") {
      newTask.style.color = "red";
    } else if (priority === "medium") {
      newTask.style.color = "yellow";
    } else {
      newTask.style.color = "green";
    }

    // Add a delete button to each task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      newTask.remove();
    });

    // Append the delete button to the new task
    newTask.appendChild(deleteButton);

    // Append the new task to the task list
    taskList.appendChild(newTask);

    // Clear the input fields
    form.reset();
  });
});
