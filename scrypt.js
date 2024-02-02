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
    newItem.classList.add('item');
    newItem.textContent = nameInput.value;
    // Добавить кнопку для удаления
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn');


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
        // задний фон
        const warning = document.createElement('div');
        warning.classList.add('warning')
        document.body.append(warning);
        // окно
        const warningWindow = document.createElement('div');
        warningWindow.classList.add('warningWindow')
        warning.append(warningWindow);
        // заголовок
        const warningTitle = document.createElement('div');
        warningTitle.classList.add('warningTitle')
        warningTitle.append(warningWindow);
        // текст
        //const warningWindow = document.createElement('div');
        //warningWindow.classList.add('warningWindow')
        //warning.append(warningWindow);







        //list.removeChild(newItem);
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


