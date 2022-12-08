import {
  KEYBOARD_DATA,
} from '../constant.js';

export function getKeyboard() {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  const currentLocation = 'ru';
  const rowsCount = KEYBOARD_DATA.sort((a, b) => b.order.row - a.order.row)[0].order.row;
  const formattedData = [];

  for (let iterator = 1; iterator <= rowsCount; iterator += 1) {
    formattedData.push(KEYBOARD_DATA.filter((keyData) => keyData.order.row === iterator));
  }

  formattedData.forEach((keysInRow, indexOfRow) => {
    const currentRow = document.createElement('div');
    currentRow.dataset.row = indexOfRow + 1;
    keyboard.insertAdjacentElement('beforeend', currentRow);

    keysInRow
      .sort((a, b) => a.order.position - b.order.position)
      .forEach((keyInRow) => {
        currentRow.insertAdjacentHTML(
          'beforeend',
          `<div class="${keyInRow.classes.join(' ')}">${keyInRow.titles[currentLocation]}</div>`,
        );
      });
  });

  return keyboard;
}
