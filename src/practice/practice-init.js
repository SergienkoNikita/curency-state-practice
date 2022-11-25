// hw 12.1
const someNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
function createPhoneNumber (arr) {
  return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}-${arr[8]}${arr[9]}`;
}
console.log(createPhoneNumber(someNumber));
// hw 12.2
const arrayWalk = ['n','n','n','s','n','s','n','s','n','s'];

function findPosition (arr) {
  if (arr.length !== 10) return false;

  const cors = {x: 0, y: 0};

  cors.x = arr.filter((v) => v === 'n').length - arr.filter((v) => v === 's').length
  cors.y = arr.filter((v) => v === 'w').length - arr.filter((v) => v === 'e').length

  return !cors.x && !cors.y;
}

console.log(findPosition(arrayWalk))

// hw 12.3
const arr1 = [];
const arr2 = ["Peter"]
const arr3 = ["Jacob", "Alex"]
const arr4 = ["Max", "John", "Mark"]
const arr5 = ["Alex", "Jacob", "Mark", "Max"]

function whoLike (arr) {
  if (!arr.length) return `no one likes this`;
  if (arr.length === 1) return `${arr[0]} likes this`;
  if (arr.length === 2) return `${arr[0]} and ${arr[1]} likes this`;
  if (arr.length === 3) return `${arr[0]}, ${arr[1]} and ${arr[2]} likes this`;
  return `${arr[0]}, ${arr[1]} and ${arr.length - 2} other likes this`;
}

console.log(whoLike(arr3))


