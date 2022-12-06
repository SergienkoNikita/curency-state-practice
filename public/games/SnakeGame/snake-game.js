import { getGameField } from './modules/snake-fileld.js';

export function snakeGame(app = document.getElementById('app')) {
  const {
    el: gameFieldElement,
    rows: gameFieldRows,
    cells: gameFieldCells,
  } = getGameField();
  app.append(gameFieldElement);

  const gameField = [];

  gameFieldRows.forEach((row, index) => {
    gameField[index] = Array.from(row.children);
  });

  // gameField = [
  //  [td, td, td, td, td, td, td, td ]
  //  [td, td, td, td, td, td, td, td ]
  //  [td, td, td, td, td, td, td, td ]
  //  [s, td, td, td, s, s, s, s ]
  //  [td, td, td, td, td, td, td, td ]
  //  [td, td, td, td, td, td, td, td ]
  // ]
}
