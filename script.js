const form = document.querySelector('#form');
const list= document.querySelector('#list')



form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){

    event.preventDefault();


    const formElement = event.target;

    // ссылка на текстовое поле
    const inputElement = formElement.text;
    // Название будущей задачи
    const todoName = inputElement.value;

    // Создание будущей задачи

    const newTodo = document.createElement('div');
    newTodo.classList.add('todo')
    newTodo.innerHTML=`
        <div>
            <span class="todo-name">${todoName} </span>
            <button class="delete-btn"> Удалить </button>
            <button class="edit-btn"> Редактировать</button>
            
        </div>
    `;
    list.appendChild(newTodo);

    
    const task = Array.from(list.children).find(el => el === newTodo);
    
    task.addEventListener('click',(e) => {
        const isDeleteButton = e.target.classList.toString()==='delete-btn';
        const isEditButton = e.target.classList.toString()==='edit-btn'

        if(isDeleteButton) onTaskDelete(task);
        if(isEditButton) onTaskEdit(task);
    });



    // Очистка текстового поля после
    inputElement.value='';

        function onTaskDelete(task){
            task.remove();
        }

        function onTaskEdit(task){
            const newTodoName = prompt('Введите новое значение');
            const isvalid = newTodoName.length >3 && newTodoName.length<20
            if(isvalid){

            const span = task.querySelector('.todo-name')
            span.innerHTML= newTodoName;  
            }else alert ('Длина названия должна быть больше 3 и меньше 20')
        }

    }