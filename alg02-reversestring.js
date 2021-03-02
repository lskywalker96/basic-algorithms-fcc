/*
Reverse a StringPassed


Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

*/
function myReverseString(str) {
  let s = str.split("").reverse();
  let reversedString = '';
  //console.log(s);
  for (let index=0; index < s.length; index++){
    reversedString+=s[index];
  }
  return reversedString;
}

const out = myReverseString("hello");
console.log(out);

/*
Get Help >>> Get a Hint <https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-reverse-a-string/16043>
*/
//solution 1
function reverseString1(str) {
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

//solution 2
function reverseString2(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

