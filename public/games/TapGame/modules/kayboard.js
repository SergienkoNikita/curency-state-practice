import {
  keyFirstRow, keySecondRow, keyThirdRow, keyForthRow, keyFifthRow,
} from '../constant.js';

export function getKayBoard() {
  const app = document.getElementById('app');
  const div = document.createElement('div');
  const firstRow = document.createElement('div');
  const secondRow = document.createElement('div');
  const thirdRow = document.createElement('div');
  const forthRow = document.createElement('div');
  const fifthRow = document.createElement('div');

  div.classList.add('keyboard');

  app.append(div);
  div.append(firstRow);
  div.append(secondRow);
  div.append(thirdRow);
  div.append(forthRow);
  div.append(fifthRow);

  function getkeyInDivWithClass(key) {
    return `<div class = 'key'>${key}</div>`;
  }

  function getKeyOnKeybord(arr, row) {
    return arr.forEach((key) => {
      row.insertAdjacentHTML('beforeend', getkeyInDivWithClass(key));
    });
  }

  getKeyOnKeybord(keyFirstRow, firstRow);
  getKeyOnKeybord(keySecondRow, secondRow);
  getKeyOnKeybord(keyThirdRow, thirdRow);
  getKeyOnKeybord(keyForthRow, forthRow);
  getKeyOnKeybord(keyFifthRow, fifthRow);

  const backspace = firstRow.querySelector('div:last-child');
  backspace.classList.add('backspace');

  const tab = secondRow.querySelector('div:first-child');
  tab.classList.add('tab-slash');

  const slash = secondRow.querySelector('div:last-child');
  slash.classList.add('tab-slash');

  const capsLock = thirdRow.querySelector('div:first-child');
  capsLock.classList.add('capslock');

  const enter = thirdRow.querySelector('div:last-child');
  enter.classList.add('enter');

  const rightShift = forthRow.querySelector('div:last-child');
  rightShift.classList.add('shift');

  const leftShift = forthRow.querySelector('div:first-child');
  leftShift.classList.add('shift');

  const space = fifthRow.querySelector('div:nth-child(3)');
  space.classList.add('space');
}

// keyFirstRow.forEach((key) => {
//   firstRow.insertAdjacentHTML('beforeend', keyInDivWithClass(key));
// });
// keySecondRow.forEach((key) => {
//   secondRow.insertAdjacentHTML('beforeend', keyInDivWithClass(key));
// });
//
// keyThirdRow.forEach((key) => {
//   thirdRow.insertAdjacentHTML('beforeend', keyInDivWithClass(key));
// });
//
// keyForthRow.forEach((key) => {
//   forthRow.insertAdjacentHTML('beforeend', keyInDivWithClass(key));
// });
//
// keyFifthRow.forEach((key) => {
//   fifthRow.insertAdjacentHTML('beforeend', keyInDivWithClass(key));
// });
//
// 1) Оболочка для клавиатуры +
// 2) пять рядов клавиш +
// 3) в правильном порядке выставить клавиши в каждом ряду +
// 4) стилизовать все клавиши+
// 5) стилизовать не стандартные клавиши+
// 6) подправить, что бы всё выглядило красиво
