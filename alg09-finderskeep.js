/*
09 - Finders Keepers
source: <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers>

Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/

function myFindElement(arr, func) {
  for (let index = 0; index < arr.length; index += 1) {
    if (func(arr[index]) === true) return arr[index];
  }
  return undefined;
}
const out = myFindElement([1, 2, 3, 4], num => num % 2 === 0);
console.log(out);

/*
Get Help >>> Get a Hint <https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-finders-keepers/16016>
*/
//Solution 1
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

//Solution 2
function findElement(arr, func) {
  return arr.find(func);
}

//Solution 3
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

//Solution 4 ** Recursive Solution **
function findElement(arr, func) {
  return arr.length && !func(arr[0]) 
    ? findElement(arr.slice(1), func)
    : arr[0];
}