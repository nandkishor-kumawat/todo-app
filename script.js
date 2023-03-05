let tasklist = document.querySelector('.tasklist'),
    add_img = document.querySelector('.add_img');

showTasks();

const addTask = () => {
    let task = document.querySelector('#task');
    let text = task.value.trim();
    if (text) {
        let tasks = localStorage.getItem('tasks');
        tasksObj = tasks ? JSON.parse(tasks) : [];
        tasksObj.unshift(text)
        localStorage.setItem("tasks", JSON.stringify(tasksObj))
        task.value = '';
        showTasks();
    } else {
        alert("can't be empty");
    }
}


add_img.addEventListener('click', addTask)
document.querySelector('#task').onkeydown = (e) =>{
    if(e.key ==="Enter") addTask()
}


function delete_task(index) {
    let tasks = localStorage.getItem('tasks');
    tasksObj = tasks ? JSON.parse(tasks) : [];

    tasksObj.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasksObj));
    showTasks();
}

function showTasks() {
    let tasks = localStorage.getItem('tasks');
    tasksObj = tasks ? JSON.parse(tasks) : [];
    html = '';
    tasksObj.forEach((ele, index) => {
        html += `<li><p>${ele}</p><button id="${index}" onclick="delete_task(this.id)"><img src="assets/delete.svg" alt="" width="12"></button></li>`;
    });

    tasklist.innerHTML = html;

}