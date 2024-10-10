document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const addTask = () => {
        let taskText = taskInput.value.trim();
        if(!taskText){
            alert("Enter a task");
        }else if(taskText){
            const newTask = document.createElement('li');
            newTask.textContent = taskText;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove";
            removeBtn.className = "remove-btn";
            removeBtn.addEventListener('onclick', function(){
                taskList.removeChild(this.parentElement);
            } );
            newTask.appendChild(removeBtn);
            taskList.appendChild(newTask);
            taskInput.value = "";
        }
    }

});