/**
 * @param num {number}
 * @returns {number}
 */
export const isEven = (num) => !!(num % 2);

export function firstCharToUpperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
