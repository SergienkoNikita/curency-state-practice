import { CELLS_COUNT, ROWS_COUNT } from '../constants.js';
import { isEven } from '../../utils.js';

export function getGameField(rowsCount = ROWS_COUNT, cellsCount = CELLS_COUNT) {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  table.classList.add('snake-field');

  table.append(tbody);

  const rows = [];
  const cells = [];

  for (let trsCount = 1; trsCount <= rowsCount; trsCount += 1) {
    rows.push(document.createElement('tr'));
  }

  rows.forEach((row, indexOfRow) => {
    row.classList.add('snake-field_tr');
    tbody.insertAdjacentElement('afterbegin', row);

    for (let cellIndex = 0; cellIndex < cellsCount; cellIndex += 1) {
      const cell = document.createElement('td');
      cells.push(cell);
      cell.classList.add('snake-field_td');
      row.insertAdjacentElement('afterbegin', cell);

      const evenTrAndOddTd = isEven(indexOfRow) && !isEven(cellIndex);
      const oddTrAndEvenTd = !isEven(indexOfRow) && isEven(cellIndex);

      if (evenTrAndOddTd || oddTrAndEvenTd) {
        cell.classList.add('snake-field_td__colored');
      }
    }
  });

  return { el: table, rows, cells };
}
