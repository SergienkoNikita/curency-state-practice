import {
  KEY_TYPES,
  KEYBOARD_DATA, SYSTEM_KEYS,
} from '../constant.js';

export function getKeyboard(keyboardData = KEYBOARD_DATA) {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  const rowsCount = keyboardData.sort((a, b) => b.order.row - a.order.row)[0].order.row;
  const formattedData = [];

  for (let iterator = 1; iterator <= rowsCount; iterator += 1) {
    formattedData.push(keyboardData.filter((keyData) => keyData.order.row === iterator));
  }

  const getSample = (keyData) => {
    const systemClasses = {};

    systemClasses[SYSTEM_KEYS[0]] = 'tab-slash';
    systemClasses[SYSTEM_KEYS[1]] = 'shift';
    systemClasses[SYSTEM_KEYS[2]] = 'capslock';
    systemClasses[SYSTEM_KEYS[4]] = 'space';
    systemClasses[SYSTEM_KEYS[6]] = 'enter';
    systemClasses[SYSTEM_KEYS[7]] = 'backspace';

    const getClassByType = (type) => {
      switch (type) {
        case KEY_TYPES.system:
          return 'system';
        case KEY_TYPES.number:
          return 'number';
        case KEY_TYPES.punctuation:
          return 'punctuation';
        default:
          return 'letter';
      }
    };

    return `<div class="key ${getClassByType(keyData.type)}
                ${keyData.type === KEY_TYPES.system
    ? systemClasses[keyData.titles.default.toUpperCase()] ?? ''
    : keyData.titles.default === '\\' ? systemClasses[SYSTEM_KEYS[0]] : ''
}">
              <span>${keyData.titles.default}</span>
            </div>`;
  };

  formattedData.forEach((keysInRow, indexOfRow) => {
    const currentRow = document.createElement('div');
    currentRow.dataset.row = indexOfRow + 1;
    keyboard.insertAdjacentElement('beforeend', currentRow);

    keysInRow
      .sort((a, b) => a.order.position - b.order.position)
      .forEach((keyInRow) => {
        currentRow.insertAdjacentHTML(
          'beforeend',
          getSample(keyInRow),
        );
      });
  });

  return keyboard;
}
