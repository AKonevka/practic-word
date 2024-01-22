const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const list = document.querySelector('#list');

myButton.addEventListener('click', (event) => {
    const newItem = document.createElement('li');
    // element.classList — Добавляет или удаляет классы для элемента
    newItem.classList.add('item');
    newItem.textContent = nameInput.value;
    // Добавить кнопку для удаления
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';

    // Удаление элмента списка
    deleteButton.addEventListener('click', () => {
        // parent.removeChild(element) - удаляеь указанный элмент из родителя  
        list.removeChild(newItem);
    })

    //Добавить кнопку в элемент списка
    // Метод parrent.appendChild(element) позволяет вставить в конец элемента (parent) 
    //какой-либо дрвугой элемент(element).
    newItem.appendChild(deleteButton);
    list.appendChild(newItem);
    // очистка поля
    nameInput.value = '';
})

