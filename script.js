document.addEventListener('DOMContentLoaded', function(){
    loadTasks();
    const storedTask = localStorage.getItem('taskList');

    if(storedTask){
        const tasks = JSON.parse(storedTask);
    }




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
            removeBtn.classList.add('remove-btn');
            removeBtn.addEventListener('onclick', function(){
                taskList.removeChild(this.parentElement);
            } );
            newTask.appendChild(removeBtn);
            taskList.appendChild(newTask);
            taskInput.value = "";
        }
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event){
        if(event.key === "Enter"){
            addTask();

        }
    });

});