const submitBtn = document.querySelector('.add-btn');
const itemsList = document.querySelector('.items');
const input = document.querySelector('.new-task');

document.querySelector('.clear-all-btn')
        .addEventListener('click', function() {
            itemsList.innerHTML = '';
            saveChanges();
        });

window.onload = function() {
    let items = JSON.parse(localStorage.getItem('data-list'));
    if(items) {
        items.forEach(item => addElement(item.text, item.checked));
    }
};

submitBtn.addEventListener('click', function(){
    const txt = input.value.trim();
    input.value = "";
    if (txt == "") return;
    addElement(txt);
    saveChanges();
});

function addElement(txt, checked=false) {
    const taskTxt = document.createElement('span');
    taskTxt.textContent = txt;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = checked;
    checkbox.addEventListener('click', changeDecoration);

    const binImg = document.createElement('img')
    binImg.src = 'static/img/bin.jpg';
    binImg.alt = 'Delete icon';
    binImg.addEventListener('click', deleteItem);

    const task = document.createElement('div');
    task.className = 'item' + (checked ? ' checked' : '');
    task.appendChild(checkbox);
    task.appendChild(taskTxt);
    task.appendChild(binImg);

    itemsList.appendChild(task);
}

function deleteItem() {
    this.parentNode.remove();
    saveChanges();
}

function changeDecoration() {
    this.parentNode.classList.toggle('checked');
    saveChanges();
}

function saveChanges() {
    let dataList = []
    itemsList.childNodes.forEach(node => {
        let checked = (node.querySelector('input') || {}).checked;
        let text = (node.querySelector('span') || {}).textContent;
        if(checked === undefined || !text) return;
        dataList.push({
            checked,
            text
        });
    });
    localStorage.setItem('data-list', JSON.stringify(dataList));
}
