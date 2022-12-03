export const OPERATORS = Object.freeze(['+', '-', '*', '/']);

export const OPERATION_METHODS = Object.freeze({
  [OPERATORS[0]]: (n1, n2) => n1 + n2,
  [OPERATORS[1]]: (n1, n2) => n1 - n2,
  [OPERATORS[2]]: (n1, n2) => n1 * n2,
  [OPERATORS[3]]: (n1, n2) => n1 / n2,
});
