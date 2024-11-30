/* script.js */
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (!taskInput.value) {
        alert('Por favor, ingrese una tarea.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskInput.value;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Completar';
    completeButton.onclick = () => li.classList.toggle('completed');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.onclick = () => taskList.removeChild(li);

    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = '';
}
