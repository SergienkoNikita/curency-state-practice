const RANDOM_NUM_DEFAULT_RANGE = 100;

export function firstCharToUpperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getRandomNum(endRange = RANDOM_NUM_DEFAULT_RANGE, startRange = 0) {
  return Math.floor(Math.random() * (endRange - startRange)) + startRange;
}
