const text = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');

document.addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {
        e.preventDefault();

        if (!text.value) return;

        const newTask = document.createElement('div');
        newTask.className = 'task';
        newTask.innerHTML = `<div class="task__title">
            ${text.value}</div>
            <a href="#" class="task__remove">&times;</a>`;

        tasksList.append(newTask);

        const taskRemove = newTask.querySelector('.task__remove');

        taskRemove.addEventListener('click', function (e) {
            e.preventDefault();
            newTask.remove();
        });

        text.value = '';
    }
});