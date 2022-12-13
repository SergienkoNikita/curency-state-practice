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

  const promo = todos.slice(0, 9); // создал новый массив для промо в 10 items
  // добавление списка

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

  promo.forEach((todo) => {
    listBlock.insertAdjacentHTML('beforeend', getTodoSample(todo));
  });
}

window.onload = onWinReady;
