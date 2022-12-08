import { getKeyboard } from './modules/kayboard.js';

export function tapGame() {
  const keyboard = getKeyboard();

  const appBlock = document.getElementById('app');
  appBlock.append(keyboard);
}
