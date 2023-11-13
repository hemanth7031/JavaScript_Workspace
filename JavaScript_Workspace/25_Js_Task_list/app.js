// Task list App

let taskFormEl = document.querySelector('#task-form');
taskFormEl.addEventListener('submit', function () {

    let taskInputEl = document.querySelector('#input-item');
    let task = taskInputEl.value.trim();

    // get task form local storage
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    taskList.unshift(task);

    // set task from local storage

    localStorage.setItem('tasks', JSON.stringify(taskList));
    displayTasks();
    console.log(JSON.stringify(taskList))
})


// display task list

let displayTasks = () => {
    let taskListEl = document.querySelector('#task-list');
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    if (taskList.lenght !== 0) {
        let eachTask = '';
        for (let task of taskList) {
            eachTask += `  <li class="list-group-item list-group-item-action">
            <span class="font-weight-bold">${task}</span>
            <button class="close">
                <i class="fa fa-times-cricle"></i>
            </button>
        </li>`;
        }
        taskListEl.innerHTML = eachTask;
    }
};

displayTasks();


// remove task

let taskListEl = document.querySelector('#task-list');
taskListEl.addEventListener('click', function (event) {
    let targetElement = event.target;
    if (targetElement.classList.contains('fa-times-cricle')) {
        let actualEl = targetElement.parentElement.parentElement;
        let selectedTask = actualEl.innerText;


        // get task form local storage
        let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        taskList = taskList.filter(function (task) {
            return task.trim() !== selectedTask.trim();
        });
        localStorage.setItem('task', JSON.stringify(taskList));
    }


})