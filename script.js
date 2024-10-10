document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const addTask = () => {
        let taskText = taskInput.value.trim();
        if(!taskText){
            alert("Enter a task");
        }
    }

});