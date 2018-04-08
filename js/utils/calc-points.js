export const checkAnswers = (answersArray, lifes) => {
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
    if (lifes === 2) {
      result -= 2;
    } if (lifes === 1) {
      result -= 4;
    } if (lifes === 0) {
      result -= 6;
    }
    return result;
  }
};
