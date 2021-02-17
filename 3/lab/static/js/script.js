const submitBtn = document.querySelector('.add-btn');
const itemsList = document.querySelector('.items');
const input = document.querySelector('.new-task');

submitBtn.addEventListener('click', function(){
    const txt = input.value.trim();
    input.value = "";
    if (txt == "") return;
    const taskTxt = document.createElement('span');
    taskTxt.innerHTML = txt;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', changeDecoration);

    const binImg = document.createElement('img')
    binImg.src = 'static/img/bin.jpg';
    binImg.alt = 'Delete icon';
    binImg.addEventListener('click', deleteItem);

    const task = document.createElement('div');
    task.className = 'item';
    task.appendChild(checkbox);
    task.appendChild(taskTxt);
    task.appendChild(binImg);

    itemsList.appendChild(task);
});

function deleteItem() {
    this.parentNode.remove();
}

function changeDecoration() {
    if (this.checked)
        this.parentNode.className = 'item checked';
    else
        this.parentNode.className = 'item unchecked';
}
