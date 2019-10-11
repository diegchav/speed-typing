/*
* Utility function to check if letter (key) typed by the user
* matches the letter in the current index of the text.
*/
export const checkLetter = (state, letter) => {
  let { text, textIndex } = state;
  const textLen = text.length;
  if (textIndex < textLen && text[textIndex] === letter) {
    return {
      textIndex: textIndex + 1,
      isWrong: false
    };
  }

  return {
    textIndex,
    isWrong: true
  };
};