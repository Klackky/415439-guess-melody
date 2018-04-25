import {playerData} from '../data/game-data.js';

export const roundTime = (time) => {
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  const roundedTime = {
    minutes,
    seconds: seconds > 9 ? seconds : `0` + seconds,
  };
  return roundedTime;
};

export const checkCorrectAnswer = (answer, state) => {
  if (answer.value !== state.correct) {
    playerData.mistakes++;
    playerData.answers.push({answer: false, time: 30});
  } else {
    playerData.answers.push({answer: true, time: 30});
  }
};

export const checkCorrectCheckboxes = (checkboxes, state) => {
  let isCorrectAnswer = true;
  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked && !state.answers[index].isCorrect || !checkbox.checked && state.answers[index].isCorrect) {
      isCorrectAnswer = false;
    }
    checkbox.checked = false;
  });
  if (!isCorrectAnswer) {
    playerData.mistakes++;
    playerData.answers.push({answer: false, time: 30});
  } else {
    playerData.answers.push({answer: true, time: 30});
  }
};
