//hw 14.1
/*function printerErrors (str) {
  let alphabetIncorrectPath = 'nopqrstvwxyz';
  let errors = 0;
  str.split('').forEach(el => {
   if (alphabetIncorrectPath.includes(el))  errors += 1
  })

   return `${errors}/${str.length}`
}

console.log(printerErrors('aaaxbbbbyyhwawiwjjjwwm'));*/
//hw 14.2
// хотел так numArray.forEach(el => Math.pow(el, el)) но почему-то не посчитало
/*function toPow (num) {
  let numArray = num.toString().split('')
  let calcArray = [];

  for (let i = 0; i < numArray.length; i += 1) {
    let temp = numArray[i] * numArray[i];
    calcArray.push(temp)
  }
  return calcArray.join('')

}

console.log(toPow(9119))*/
//hw 14.3
function comp (a, b) {

}

console.log(comp([2,3,4,'a','b',2], [1,2,3,4,5,'a','b','c']))
//hw 14.4
/*function isElementEqual (str) {
  let tempArr = str.toLowerCase().split('');
  let counterX = 0
  let counterO = 0
  tempArr.forEach(el => {
    if (el === 'x') counterX += 1;
    if (el === 'o') counterO += 1;
  });
  console.log(counterX)
  console.log(counterO)
  if ((counterX - counterO) === 0) {return true}
  if (counterX !== counterO) {return false}

}

console.log(isElementEqual("zpzpzpp"))*/
//hw 14.5
/*
function arrayDiff (arr1, arr2 ) {
  let arrayDiff;
  return arrayDiff = arr1.filter(el => !arr2.includes(el))

}

console.log(arrayDiff([1,2,2,2,3],[2]))
*/
