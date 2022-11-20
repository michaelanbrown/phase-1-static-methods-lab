class Formatter {
  static capitalize(string) {
    let first = string[0];
    let last = string.substring(1);
    let firstUpper = first.toUpperCase();
    return firstUpper + last;
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  static titleize(string) {
    let littleWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newString = string.split(' ');
  let finalString = [];
    for (let word in newString) {
      if (littleWords.indexOf(newString[word]) > -1) {
        finalString.push(newString[word]);
      } else if (littleWords.indexOf(newString[word]) <= -1) {
        newString[word] = newString[word][0].toUpperCase() + newString[word].substring(1);
        finalString.push(newString[word]);
      }
    }
  finalString[0] = finalString[0][0].toUpperCase() + finalString[0].substring(1);
  return finalString.join(' ')
  }
}