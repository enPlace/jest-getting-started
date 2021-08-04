//http://practicalcryptography.com/ciphers/caesar-cipher/
//A substitution cipher in which each letter in a string is 'shifted' a certain number of places down the alphabet.

function caesar(string, val) {
  //accepts a string with only letters or spaces. Value must be greater than 0
  const lettersOnly = new RegExp(/^[a-z\s]+$/, "gi");
  if (!lettersOnly.test(string)) {
    throw new Error("Only letters or spaces allowed");
  }
  if (val <= 0) {
    throw new Error("value must be greater than 0");
  }
  let shifted = "";
  string.split("").forEach((letter) => {
    let caseString;
    if (letter == letter.toUpperCase()) {
      caseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (letter == letter.toLowerCase()) {
      caseString = "abcdefghijklmnopqrstuvwxyz";
    }
    if (letter === " ") {
      shifted += letter;
    } else {
      let newValue = caseString.indexOf(letter) + val;
      if (newValue > 25) {
        const diff = newValue - 25;
        shifted += caseString[diff - 1];
      }
      if (newValue <= 25) {
        shifted += caseString[newValue];
      }
    }
  });
  return shifted;
}
export { caesar };
