import { makeMockTodos } from './mocks.js';

const DEFAULT_LIST_LIMIT = 10;

const FILTER_TYPES = Object.freeze({
  ALL: 'all',
  PERFORMED: 'performed',
  NOT_PERFORMED: 'not-performed',
});

const FILTER_TYPE_VALUES = Object.freeze({
  [FILTER_TYPES.ALL]: { label: 'Все', value: FILTER_TYPES.ALL },
  [FILTER_TYPES.PERFORMED]: { label: 'Выполненные', value: FILTER_TYPES.PERFORMED },
  [!FILTER_TYPES.NOT_PERFORMED]: { label: 'Не выполненные', value: FILTER_TYPES.NOT_PERFORMED },
});

const getTodoListElement = () => {
  const listBlock = document.createElement('div');
  listBlock.classList.add('todo-list');
  return listBlock;
};

const getShowMoreButtonElement = () => {
  const button = document.createElement('div');
  button.classList.add('more-items');
  return button;
};

const getAddTodoField = () => {
  const inputElement = document.createElement('input');
  inputElement.classList.add('new-todo-field');
  inputElement.type = 'text';
  inputElement.placeholder = 'Введите новую задачу';
  return inputElement;
};

const getAddTodoBlock = () => {
  const label = document.createElement('label');
  label.classList.add('new-todo');
  return label;
};

const getAddTodoSubmit = () => {
  const buttonElement = document.createElement('div');
  buttonElement.classList.add('submit-new-todo');
  buttonElement.type = 'submit';
  buttonElement.innerText = '✔';
  return buttonElement;
};

// eslint-disable-next-line func-names
const getListItemElement = function (todoItem) {
  const block = document.createElement('div');
  block.classList.add('todo-list-label');
  if (todoItem.performed) block.classList.add('checked');
  block.setAttribute('data-id', todoItem.id);
  block.insertAdjacentHTML(
    'afterbegin',
    `
    <input id="${todoItem.id}" type="checkbox" ${todoItem.performed ? 'checked' : ''}>
    <p class="todo-list-item-title">${todoItem.title}</p>
    <div class="todo-list-item-remove-button">
    <img src="./todo-list/image/delete.png" alt="trash">
    </div>`,
  );

  return block;
};

const renderTodos = (block, todos = []) => {
  todos.forEach((todo) => {
    block.append(getListItemElement(todo));
  });
  block.querySelectorAll('.todo-list-item-remove-button')
    .forEach((block) => block
      .addEventListener('click', () => {
        block.parentElement.remove();
      }));
  block.querySelectorAll('.todo-list-label > input')
    .forEach((input) => input
      .addEventListener('change', () => {
        if (!input.checked) {
          input.parentElement.classList.remove('checked');
        }
        if (input.checked) {
          input.parentElement.classList.add('checked');
        }
      }));
};

const getFilterBlock = () => {
  const selectElement = document.createElement('select');
  selectElement.classList.add('todo-list-filter');
  Object.values(FILTER_TYPE_VALUES).forEach((filterType) => {
    const optionElement = document.createElement('option');
    optionElement.value = filterType.value;
    optionElement.innerText = filterType.label;
    selectElement.insertAdjacentElement('beforeend', optionElement);
  });

  selectElement.value = FILTER_TYPES.ALL;
  return selectElement;
};

const generateNewTodo = (id, title) => ({
  id,
  title,
  performed: false,
  createdAt: Date.now(),
});

function todoList() {
  const app = document.getElementById('app');
  const list = getTodoListElement();
  const showMoreButton = getShowMoreButtonElement();
  const addTodoField = getAddTodoField();
  const addTodoSubmit = getAddTodoSubmit();
  const getTodoBlock = getAddTodoBlock();
  const allTodos = makeMockTodos();
  let currentTodos = allTodos;
  let renderedTodos = [...currentTodos.slice(0, DEFAULT_LIST_LIMIT)];
  const filter = getFilterBlock();

  const addShowMoreButton = () => {
    if (currentTodos.length > DEFAULT_LIST_LIMIT) {
      showMoreButton.innerText = `Загрузить еще ${currentTodos.length - DEFAULT_LIST_LIMIT}`;
      list.insertAdjacentElement('afterend', showMoreButton);
    }
  };

  const renderListStructure = () => {
    list.append(getTodoBlock);
    getTodoBlock.append(addTodoField);
    getTodoBlock.append(addTodoSubmit);
    app.append(list);
    getTodoBlock.insertAdjacentElement('afterend', filter);
  };

  const renderCurrentTodos = () => {
    if (filter.value === FILTER_TYPES.PERFORMED) {
      currentTodos = allTodos.filter((todoItem) => todoItem.performed);
    }
    if (filter.value === FILTER_TYPES.NOT_PERFORMED) {
      currentTodos = allTodos.filter((todoItem) => !todoItem.performed);
    }
    if (filter.value === FILTER_TYPES.ALL) currentTodos = allTodos;

    renderedTodos = [...currentTodos.slice(0, DEFAULT_LIST_LIMIT)];

    addShowMoreButton();
    renderTodos(list, renderedTodos);
  };

  const generateIdForTodo = () => {
    const randNum = Math.floor(Math.random() * 2000);
    if (allTodos.some((todo) => todo.id === randNum)) {
      return generateIdForTodo();
    }

    return randNum;
  };

  showMoreButton.addEventListener('click', () => {
    const moreItems = currentTodos.slice(
      renderedTodos.length,
      renderedTodos.length + DEFAULT_LIST_LIMIT,
    );
    renderTodos(list, moreItems);
    renderedTodos.push(...moreItems);

    if (renderedTodos.length >= currentTodos.length) {
      showMoreButton.remove();
      showMoreButton.innerText = '';
    } else {
      showMoreButton.innerText = `Загрузить еще ${currentTodos.length - renderedTodos.length}`;
    }
  });

  addTodoSubmit.addEventListener('click', () => {
    if (!addTodoField.value) return;

    const todo = generateNewTodo(generateIdForTodo(), addTodoField.value);

    allTodos.unshift(todo);
    renderedTodos.unshift(todo);

    getTodoBlock.append(getListItemElement(todo));
    addTodoField.value = '';
  });

  filter.addEventListener('change', () => {
    document.querySelectorAll('[data-id]').forEach((renderedTodo) => renderedTodo.remove());
    showMoreButton.remove();
    renderCurrentTodos();
  });

  renderListStructure();
  renderCurrentTodos();
}

window.onload = todoList;
