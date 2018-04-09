/**
function responsible for calculating points collected by player.
 * @param {array} answersArray - array of player`s answers with spent time.
 * @param {number} lifes - number of remaining lifes.
 * @return {number} player`s points.
 */
export const checkAnswers = (answersArray, lives) => {
  const correctAnswersArray = answersArray.filter((answer) => answer === true);
  let result = 0;
  if (correctAnswersArray.length < 9) {
    return -1;
  } else {
    answersArray.forEach((answer, index) => {
      if (index % 2 === 0 && answer) {
        result += 1;
        if (answersArray[++index] < 0.30) {
          result += 1;
        }
      }
    });
    if (lives === 2) {
      result -= 2;
    } if (lives === 1) {
      result -= 4;
    } if (lives === 0) {
      result -= 6;
    }
    return result;
  }
};
