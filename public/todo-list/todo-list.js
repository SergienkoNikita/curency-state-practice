import { makeMockTodos } from './mocks.js';

window.onload = () => {
  const todos = makeMockTodos();
  const app = document.getElementById('app');
  const div = document.createElement('div');
  const moreItem = document.createElement('div');

  div.className = 'todo-list';

  app.append(div);
  app.append(moreItem);

  moreItem.insertAdjacentHTML('beforeend', `<div class = "more-items">Загрузить ещё ${todos.length - 10} элементов<div>`);

  // сортировка по дате
  function sortByField(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  }

  todos.sort(sortByField('createdAt'));
  const promo = todos.slice(0, 9); // создал новый массив для промо в 10 строк
  // добавление списка
  promo.forEach((todo) => {
    if (todo.performed) div.insertAdjacentHTML('beforeend', `<label class="checked"><input type="checkbox" checked><p><s>${todo.title}<s></p><button><img src="./todo-list/image/delete.png" alt=""></button></label>`);
    if (!todo.performed) div.insertAdjacentHTML('beforeend', `<label><input type="checkbox"><p>${todo.title}</p><button><img src="./todo-list/image/delete.png" alt=""></button></label>`);
  });
  // фактически что бы отрисовать только выполненные нужно убрать из условия второй if
  // что бы убрать не выполненные, нужно убрать первый if

  // Загрузить ещё
  /* document.dquerySelector('more-items').onclick = function () {
    document.querySelector('more-items').hidden = true;
    const remainingItems = todos.slice(10, todos.length);
    remainingItems.forEach((todo) => {
      if (todo.performed) div.insertAdjacentHTML('beforeend', `<label class="checked"><input type="checkbox" checked><p><s>${todo.title}<s></p><button><img src="./todo-list/image/delete.png" alt=""></button></label>`);
      if (!todo.performed) div.insertAdjacentHTML('beforeend', `<label><input type="checkbox"><p>${todo.title}</p><button><img src="./todo-list/image/delete.png" alt=""></button></label>`);
    });
  }; */
  // это не доделал

  console.log(todos);
};
