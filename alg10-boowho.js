/*
10 - Boo who

Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
*/
function myBooWho(bool) {
  return (typeof bool === 'boolean');
}
const out = myBooWho(true);
console.log(out);
/*
Get Help >>> Get a Hint <https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-boo-who/16000>
*/
function booWho(bool) {
  return typeof bool === "boolean";
}
// test here
booWho(null);