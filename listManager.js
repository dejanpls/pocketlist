const list = JSON.parse(localStorage.getItem('shoppingList')) || [];

export function saveList() {
    localStorage.setItem('shoppingList', JSON.stringify(list));
}

export function renderList() {
    const ul = document.getElementById('shopping-list');
    ul.innerHTML = '';

    list.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Delete';
        removeButton.onclick = () => {
            list.splice(index, 1);
            saveList();
            renderList();
        };

        li.appendChild(removeButton);
        ul.appendChild(li);
    });
}

export function addItem() {
    const input = document.getElementById('item-input');
    const newItem = input.value.trim();
    if (newItem) {
        list.push(newItem);
        saveList();
        renderList();
        input.value = '';
    }
    input.focus();
}