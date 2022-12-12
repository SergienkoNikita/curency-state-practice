import { getKeyboard } from './modules/kayboard.js';

export function tapGame() {
  const appBlock = document.getElementById('app');

  function renderKeyboard(lang = 'RU') {
    if (lang === 'RU') {
      appBlock.append(getKeyboard());
    }
  }

  renderKeyboard();
}
