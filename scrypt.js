const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const list = document.querySelector('#list');

let logNum = 1;
let logNum2 = 1;

myButton.addEventListener('click', (event) => {
    console.log(event)
    const newItem = document.createElement('li');

    /*
        document.addEventListener('keydown', function(event) {
            if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
              alert('Отменить!')
            }
          });
    */

    // element.classList — Добавляет или удаляет классы для элемента
    //newItem.setAttribute('id', 'newItem');
    //newCommentImg.id = 'id';
    newItem.classList.add('item');
    newItem.textContent = nameInput.value;
    //let item = document.getElementsByClassName('#item');
    // Добавить кнопку для удаления
    //const objectButton = document.createElement('div')
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn');
    //deleteButton.textContent = 'Удалить';


    if (logNum == 1) {
        logNum = 2;
        //newItem.style = `background: rgb(249, 249, 249);`
        // deleteButton.style = `background: rgb(249, 249, 249);`
    } else {
        logNum = 1;
        //newItem.style = `background: rgb(238, 238, 238);`
        // deleteButton.style = `background: rgb(238, 238, 238);`
    }
    console.log(logNum);


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
    //nameInput.value = '';
    newItem.addEventListener('click', function (event) {
        if (logNum2 == 1) {
            newItem.style = `;
            text-decoration: line-through;`;
            logNum2 = 2;
        } else {
            newItem.style = `;
            text-decoration: none;`;
            logNum2 = 1;
        }

    })
})













/*newItem.addEventListener('click', (event) => {
    newItem.style.backgroundColor = 'red';
})*/


