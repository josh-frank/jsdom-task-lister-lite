const taskForm = document.getElementById("create-task-form");
const taskInputField = document.getElementById( "new-task-description" );
const taskList = document.getElementById( "tasks" );

document.addEventListener( "DOMContentLoaded", () => {
  taskForm.addEventListener( "submit", addTaskToList );
} );

const addTaskToList = function ( submitButton ) {
  submitButton.preventDefault();
  taskList.innerHTML += `<li>${ taskInputField.value }</li>`;
  taskInputField.value = "";
}
