// hw 12.1
const someNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
function createPhoneNumber (arr) {
  return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}-${arr[8]}${arr[9]} `;
}
console.log(createPhoneNumber(someNumber));
// hw 12.2
const arrayWalk = ['n', 's', 'w', 'e', 'n', 's', 'w', 'e', 'n', 's'];

function findPosition (arr) {
  if (arr.length !== 10) return false;

  let n = 0;
  let s = 0;
  let w = 0;
  let e = 0;

  arr.forEach((i) => {
    if (i === 'n') n += 1;
    if (i === 's') s += 1;
    if (i === 'w') w += 1;
    if (i === 'e') e += 1;
  })

  if (n !== s && w !== e) return false;
  if (n === s && w === e) return true;
}

console.log(findPosition(arrayWalk))

// hw 12.3
const arr1 = [];
const arr2 = ["Peter"]
const arr3 = ["Jacob", "Alex"]
const arr4 = ["Max", "John", "Mark"]
const arr5 = ["Alex", "Jacob", "Mark", "Max"]

function whoLike (arr) {
  if (arr[0] === undefined) return `no one likes this`;
  if (arr.length < 2) return `${arr} likes this`;
  if (arr.length === 2) return `${arr[0]} and ${arr[1]} likes this`;
  if (arr.length === 3) return `${arr[0]}, ${arr[1]} and ${arr[2]} likes this`;
  if (arr.length > 3)  return `${arr[0]}, ${arr[1]} and ${arr.length - 2} other likes this`;
}

console.log(whoLike(arr3))


