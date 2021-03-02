function myConvertToF(celsius) {
  let fahrenheit = (celsius*9/5)+32;
  return fahrenheit;
}

const out = myConvertToF(30);
console.log(out);

/*
Get Help >>> Get a Hint <https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-convert-celsius-to-fahrenheit/16806>
*/
function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

// Change the inputs below to test your code
convertToF(30);