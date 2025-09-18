// Select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add Task
addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        li.appendChild(taskContent);

        // Add Mark as Completed
        taskContent.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Add Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        li.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Append new task to the list
        taskList.appendChild(li);
        taskInput.value = '';  // Clear input field
    } else {
        alert("Please enter a task!");
    }
});

// Optional: Allow pressing Enter to add task
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTaskBtn.click();
    }
});
