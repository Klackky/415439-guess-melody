import createNewDomElement from '../utils/create-new-element';
import renderScreen from '../utils/render-screen';
import getResult from './result';
import {header} from './game.js';
import {playerTemplate} from './game.js';
import {levels} from '../data/game-data.js';
import {playerData} from '../data/game-data.js';
import {results} from '../data/game-data.js';
const guessGenre = (level) => {
  const guessGenreTemplate = `<section class="main main--level main--level-genre">
${header(playerData)}
  <div class="main-wrap">
    <h2 class="title">Выберите ${level.genre} треки</h2>
    <form class="genre">
    ${level.answers.map((answer, index) =>`<div class="genre-answer">
    ${playerTemplate(answer.src)}
      <input type="checkbox" name="answer" value="answer-${index}" id="a-${index}">
      <label class="genre-answer-check" for="a-${index}"></label>
    </div>`).join(``)}
      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </div>
</section>`;
  const guessGenreElement = createNewDomElement(guessGenreTemplate);
  // generates random result from an array
  let genreAnswersSend = guessGenreElement.querySelector(`.genre-answer-send`);
  const checkboxes = Array.from(guessGenreElement.querySelectorAll(`input[type="checkbox"]`));
  // genreAnswersSend button disabled by default
  genreAnswersSend.disabled = true;
  // if one of checkboxes is checked genreAnswersSend button becomes enabled
  checkboxes.forEach((answer) => {
    answer.addEventListener(`change`, () => {
      genreAnswersSend.disabled = !checkboxes.some((checkbox) => checkbox.checked);
    });
  });

  genreAnswersSend.addEventListener(`click`, () => {
    let notCorrect = false;
    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked && !level.answers[index].isCorrect || !checkbox.checked && level.answers[index].isCorrect) {
        notCorrect = true;
      }
      checkbox.checked = false;
    });
    if (!notCorrect && playerData.level < 9) {
      renderScreen(guessGenre(levels[++playerData.level]));
      playerData.answers.push({answer: true, time: 30});
    } else if (notCorrect) {
      playerData.mistakes++;
      playerData.answers.push({answer: false, time: 30});
      renderScreen(guessGenre(levels[playerData.level]));
      if (playerData.mistakes >= 3) {
        renderScreen(getResult(results.fail));
      }
    } else {
      playerData.answers.push({answer: true, time: 30});
      renderScreen(getResult(results.win));
    }
  });
  return guessGenreElement;
};
export default guessGenre;
