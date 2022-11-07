(function() {
    //создаём пустой массив для списка дел, которые мы передадим туда объекттами
    let listArr = [];
    //создаём переменную для того чтобы сделать keyName глобальным
    let listName = "";

    //создаём и возвращаем заголовок приложения 
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    //создаём и возвращаем форму для создания дела
    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить новое дело';
        //деактивируем кнопку
        button.disabled = true;
        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);
        // тут мы будем проверять заполнено ли поле с названием дела и если нет, то кнопка будет не активна
        input.addEventListener('input', function() {
            if (input.value == "") {
                button.disabled = true
            }else {
                button.disabled = false
            }
        })

        return {
            form,
            input,
            button
        };
    }

    // создаём и возвращаем список элементов
    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    //создаём список дел
    function createTodoItem(obj) {
        let item  = document.createElement('li');
        //кнопки помещаем в элемент, который красиво покажет их в одной группе
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        //устанавливаем стили для элемена списка, а также для размещения кнопок в его правой части с помощью flex
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = obj.name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', "btn-success");
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        //добавляем класс если дело выполенено
        if (obj.done == true) {
            item.classList.add('list-group-item-success');
        }

        //добавляем обработчики на кнопки
        doneButton.addEventListener('click', function() {
            item.classList.toggle('list-group-item-success');
        
            for (const listItem of listArr) {
                if (listItem.id == obj.id) {
                    listItem.done = !listItem.done
                };
            };
            //сохраняем значения при изменении статуса дела
            saveList(listArr, listName);

        });    

        deleteButton.addEventListener('click', function() {
            if (confirm('Вы уверены?')) {
                item.remove()
                
                for (let i = 0; i < listArr.length; i++) {
                    if (listArr[i].id == obj.id){ 
                        listArr.splice (i,1)
                    };
                };
                //сохраняем значения при удалении дела
                saveList(listArr, listName);

            }
        });

        //вкладываем кнопки в отдельный элемент, чтобы они объеденились в один блок
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        //приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
        return {
            item,
            doneButton,
            deleteButton
        };
    }
    //создаём функцию для нахождения максимального числа (это поможетнам создать уникальный id)
    function getNewId (arr){
        let max = 0;
        for (const item of arr) {
            if (item.id > max) {
                max = item.id
            };
        };
        return max + 1;
    };
    //преобразуем массив объектов в строку и сохраняем в localStorage
    function saveList (arr, keyName) {
        localStorage.setItem(keyName,JSON.stringify(arr));
    };

    function createTodoApp(container, title = 'Список дел', keyName, defArr = []) {
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();
        //делаем значение глобальное переменной listName равной значению переменной keyName
        listName = keyName;

        //передаём список по умолчанию в listArr
        listArr = defArr;

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);
        //расшифровка значения localStorage в массив
        let localData = localStorage.getItem(listName);
        //проверяем чтобы localDatа не был пустым и если он не пустой то преобразуем его в объект
        if (localData !== null && localData !== "") {
            listArr = JSON.parse(localData);
        };
        //проходим циклом по массиву и восстанавливаем значения и локальной памяти
        for (const itemList of listArr) {
            //создаём переменныю в которую и помещаем наш восстановленный объект
            let todoItem = createTodoItem(itemList);
            //и добавялем полученное значение в DOM
            todoList.append(todoItem.item);
        }

        //браузер создаёт событие submit на форме по нажатию на Enter или на кнопку создания дела
        todoItemForm.form.addEventListener('submit', function(e) {
            //эта строчка необходима. чтобы предотвратить стандартное действие браузера
            //в данном случае мы не хотим, чтобы страница перезагружалась  при отправке формы 
            e.preventDefault();

            //игнорируем создание элемента, если пользователь ничего не ввёл в поле
            if (!todoItemForm.input.value) {
                return;
            }

                //добавляем новое дело (объект)
                let newItem = {
                    id: getNewId(listArr),
                    name:todoItemForm.input.value,
                    done:false
                };

            let todoItem = createTodoItem(newItem);

            //добавялем новый объект в наш массив дел
            listArr.push(newItem);
            //сохраняем значения при добавлении дела
            saveList(listArr, listName);

            //создаём и добавляем в список новое дело с названием из поля для ввода
            todoList.append(todoItem.item);
            
            //обнуляем значение в поле, чтобы не пришлось стирате его вручную
            todoItemForm.input.value = '';
            //и деактивируем кнопку
            todoItemForm.button.disabled = true; 
        });
    }
    
    window.createTodoApp = createTodoApp;
})();