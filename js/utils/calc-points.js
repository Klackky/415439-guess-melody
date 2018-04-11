/**
function responsible for calculating points collected by player.
 * @param {array} answersArray - array of player`s answers with spent time.
 * @param {number} notes - number of remaining lives.
 * @return {number} player`s points.
 */
export const calcPoints = (answersArray, notes) => {
  const correctAnswersArray = answersArray.filter((answer) => answer.answer);
  let result = 0;
  if (notes === 0 || correctAnswersArray.length < 9) {
    return -1;
  } else {
    answersArray.forEach((answer) => {
      if (answer.answer) {
        result += 1;
        if (answer.time < 30) {
          result += 1;
        }
      } else {
        result -= 2;
      }
    });
    return result;
  }
};
