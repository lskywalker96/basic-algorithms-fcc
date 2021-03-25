/*
12 - Slice and Splice

You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/
function myFrankenSplice(arr1, arr2, n) {
  const copyArr2 = arr2.slice();
  copyArr2.splice(n, 0, ...arr1);
  return copyArr2;
}
const out = myFrankenSplice([1, 2, 3], [4, 5, 6], 1);
console.log(out);
/*
Get Help >>> Get a Hint <https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-slice-and-splice/301148>
*/
//Solution 1
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

//Solution 2
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}