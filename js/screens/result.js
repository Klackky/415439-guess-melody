import createNewDomElement from '../utils/create-new-element';
import renderScreen from '../utils/render-screen';
import guessArtist from './guess-artist';
import {playerData} from '../data/game-data.js';
import {levels} from '../data/game-data.js';
import {calcPoints} from '../utils/calc-points';
import {showResult} from '../utils/show-result';
const getResult = (resultScreen) => {
  const remainingNotes = 3 - playerData.mistakes;
  const resultTemplate = `<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  <h2 class="title">${resultScreen.h2}!</h2>
  <div class="main-stat">${resultScreen.description ? resultScreen.description : `За&nbsp;4&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали ${calcPoints(playerData.answers, remainingNotes)} баллов (8 быстрых)
      <br>совершив ${playerData.mistakes} ошибки` }</div>
  ${resultScreen.comparison ? `<span class="main-comparison">${showResult([1, 5, 6, 7], playerData.answers)}</span>` : ``}
  <span role="button" tabindex="0" class="main-replay">${resultScreen.replay} ещё раз</span>
</section>`;
  const result = createNewDomElement(resultTemplate);
  const mainReply = result.querySelector(`.main-replay`);
  mainReply.addEventListener(`click`, () => {
    playerData.level = 0;
    playerData.mistakes = 0;
    playerData.answers.length = 0;
    renderScreen(guessArtist(levels[playerData.level]));
  });
  return result;
};

export default getResult;
