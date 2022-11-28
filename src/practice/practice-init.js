// hw 13.1
const str = 'Who is John Golt?'
function getVowelsNum (str) {
  const vowels = 'aeiou'
  let arr = str.toLowerCase().split('')
  return arr.filter(el => vowels.includes(el)).length;
}
console.log(getVowelsNum(str))

// hw 13.2
function getBinarySum (arg1, arg2) {
  let binarySum = (arg1 + arg2).toString(2)
  return `(${arg1}, ${arg2}) --> "${binarySum}" (${arg1} + ${arg2} = ${(arg1 + arg2)} in decimal or ${binarySum} in binary)`
}

console.log(getBinarySum(5, 9))

//hw 13.3
const array = [1,2,3,4,5,4,5,4,42,5,4,3,2,1];

function getIndexN (arr) { // ну я хуй знаю как её ещё обозвать
  let counter = 0;
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < arr.length / 2; i += 1) {
    let lastKey = (arr.length - 1) - i
    if (leftSum === rightSum) {
      leftSum += arr[i];
      rightSum += arr[lastKey]
      counter += 1;
    } else {
      break;
    }
  }
  if (arr[0] !== arr[arr.length - 1]) counter = -1;
  if (arr.length % 2 === 1) counter -= 1;
  return counter;
}

console.log(getIndexN(array))

//hw 13.4
const pangram = 'Glib jocks quiz nymph to vex dwarf';

function isPangram (str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let pangram = alphabet.split('').filter(el => str.toLowerCase().includes(el));

  return pangram.length === 26
}

console.log(isPangram(pangram))

