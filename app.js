// Appwrite API integration and CRUD operations

// Function to add a new task
function addTask() {
    // Get form values
    var taskName = document.getElementById('task-name').value;
    var taskDeadline = document.getElementById('task-deadline').value;
    var taskCategory = document.getElementById('task-category').value;

    // Create a new task item
    var taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = '<h3>' + taskName + '</h3><p>Deadline: ' + taskDeadline + '</p><p>Category: ' + taskCategory + '</p>';

    // Append task item to the task container
    var taskContainer = document.getElementById('task-container');
    taskContainer.appendChild(taskItem);
}

// Event listener for form submission
document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    addTask(); // Call the addTask function

    // Clear form inputs
    document.getElementById('task-name').value = '';
    document.getElementById('task-deadline').value = '';
    document.getElementById('task-category').value = '';
});

