import { makeMockTodos } from './mocks.js';

const DEFAULT_LIST_LIMIT = 10;

function onWinReady() {
  const todos = makeMockTodos();
  const app = document.getElementById('app');
  const listBlock = document.createElement('div');
  listBlock.classList.add('todo-list');

  const getAddTodoField = () => {
    const label = document.createElement('label');
    label.classList.add('new-todo');
    label.insertAdjacentHTML('afterbegin', `
      <input class="new-todo-field" type="text" placeholder="Введите новую задачу"/>
      <button type="submit" class="submit-new-todo">✓</button>
    `);

    return label;
  };

  app.append(listBlock);

  listBlock.insertAdjacentElement('beforebegin', getAddTodoField());

  if (todos.length > DEFAULT_LIST_LIMIT) {
    const button = document.createElement('div');
    button.classList.add('more-items');
    button.innerText = `Загрузить ещё ${todos.length - DEFAULT_LIST_LIMIT} элементов`;
    listBlock.insertAdjacentElement('afterend', button);
  }

  todos.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1));

  const promo = todos.slice(0, 9);

  const getTodoSample = (todoItem) => `
      <div class="todo-list-label ${todoItem.performed ? 'checked' : ''}">
        <label for="${todoItem.id}"></label>
        <input id="${todoItem.id}" type="checkbox" ${todoItem.performed ? 'checked' : ''}>
        <p class="todo-list-item-title" >${todoItem.title}</p>
        <div class="todo-list-item-remove-button">
            <img src="./todo-list/image/delete.png" alt="trash">
        </div>
      </div>
    `;

  // hw 17.2
  // const performed = [];

  // для выполненных

  // todos.forEach((todo) => {
  //   if (todo.performed) performed.push(todo);
  // });

  // для не выполненных

  // todos.forEach((todo) => {
  //   if (!todo.performed) performed.push(todo);
  // });
  // console.log(performed);
  // console.log(todos);

  // при нажатии "загрузить ещё" он загружает и выполненные и не выполненные.
  // в restTodo нужно заменить todos на performed. (79 строка кода)
  // тогда будут открываться только выполненные\или не выполненные в зависимости от сценария.
  // кроме того performed нужно перенести на 25 строку кода, т.к. он будет использоваться
  // в отрисовке количества оставшихся для загрузки элементов списка.
  // т.к. он не может быть использован прежде чем будет объявлен.
  // я решил не засирать слишком сильно основной код меняя всё это)

  // в методе заменить промо на перформед
  promo.forEach((todo) => {
    listBlock.insertAdjacentHTML('beforeend', getTodoSample(todo));
  });

  // hw 17.1
  const restTodo = todos.slice(10);

  function loadMoreTodo() {
    document.querySelector('.more-items').remove();
    restTodo.forEach((todo) => {
      listBlock.insertAdjacentHTML('beforeend', getTodoSample(todo));
    });
  }

  if (document.querySelector('.more-items')) {
    const loadMore = document.querySelector('.more-items');
    loadMore.addEventListener('click', loadMoreTodo);
  }

  // hw 17.3
  const userInput = [];

  const inputField = document.querySelector('.new-todo-field');
  const inputButton = document.querySelector('.submit-new-todo');

  // const UserInput = class {
  //   constructor(id, title, createdAt, performed = false) {
  //     this.id = '';
  //
  //     this.title = '';
  //
  //     this.createdAt = '';
  //
  //     this.performed = '';
  //   }
  // };

  function inputValue() {
    userInput.push({
      id: Math.floor(Math.random() * 2000),
      title: inputField.value,
      createdAt: Date.now(),
      performed: false,
    });
    inputField.value = '';
  }

  inputButton.addEventListener('click', inputValue);

  console.log(userInput);
  console.log(todos);
}

window.onload = onWinReady;
