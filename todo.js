
const menuIcon = document.getElementById('menuIcon');
const menuList = document.getElementById('menuList');


menuIcon.addEventListener('click', () => {
    if (menuList.style.display === 'block') {
        menuList.style.display = 'none';
    } else {
        menuList.style.display = 'block';
    }
});
function addTodo() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    if (!task) return;

    const list = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        ${task}
        <button onclick="deleteTodo(this)">Delete</button>
    `;
    list.appendChild(listItem);
    input.value = '';
}

function deleteTodo(button) {
    button.parentElement.remove();
}

function filterTasks() {
    const searchValue = document.getElementById('search-bar').value.toLowerCase();
    const tasks = document.querySelectorAll('#todo-list li');
    tasks.forEach(task => {
        task.style.display = task.textContent.toLowerCase().includes(searchValue) ? '' : 'none';
    });
}
