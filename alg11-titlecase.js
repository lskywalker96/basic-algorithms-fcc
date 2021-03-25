/*
11 - Title Case a Sentence

Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/
function myTitleCase(str) {
  const strFormated = [];
  const strSplited = str.split(' ');
  for (let index = 0; index < strSplited.length; index += 1) {
    const lowerCaseWord = strSplited[index].toLowerCase();
    const modifiedWord = lowerCaseWord.replace(lowerCaseWord[0], lowerCaseWord[0].toUpperCase());
    strFormated.push(modifiedWord);
  }
  return strFormated.join(' ');
}

const out = myTitleCase("I'm a little tea pot");
console.log(out);
/*
Get Help >>> Get a Hint <https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-title-case-a-sentence/16088>
*/
//Solution 1
String.prototype.replaceAt = function(index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

function titleCase(str) {
  var newTitle = str.split(" ");
  var updatedTitle = [];
  for (var st in newTitle) {
    updatedTitle[st] = newTitle[st]
      .toLowerCase()
      .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }
  return updatedTitle.join(" ");
}

//Solution 2
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

//Solution 3
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}

//TimF solution
function titleCase(str) {
  str = str.split(' ');

  for (i = 0; i < str.length; i++) {
    str[i] = str[i].toLowerCase().split('');
    str[i][0] = str[i][0].toUpperCase();
    str[i] = str[i].join('');
  }

  return str.join(' ');
}
