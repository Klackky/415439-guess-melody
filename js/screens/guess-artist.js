import createNewDomElement from '../utils/create-new-element';
import renderScreen from '../utils/render-screen';
import guessGenre from './guess-genre';
import {header} from './game.js';
import getResult from './result.js';
import {playerTemplate} from './game.js';
import {levels} from '../data/game-data.js';
import {playerData} from '../data/game-data.js';
import {results} from '../data/game-data.js';
const guessArtist = (level) => {
  const guessArtistTemplate = `<section class="main main--level main--level-artist">
${header(playerData)}
    <div class="main-wrap">
      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      ${playerTemplate(level.src)}
      <form class="main-list">
      ${level.answers.map((answer, index) =>
    `<div class="main-answer-wrapper">  <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="${answer.artist}"/>
        <label class="main-answer" for="answer-${index}">
          <img class="main-answer-preview" src="${answer.image}"
             alt="${answer.artist}" width="134" height="134">
          ${answer.artist}
        </label>
        </div>`
  ).join(``)}
      </form>
    </div>
  </section>`;

  const guessArtistElement = createNewDomElement(guessArtistTemplate);
  const answers = Array.from(guessArtistElement.querySelectorAll(`.main-answer-r`));
  answers.forEach((answer, index) => {
    answer.addEventListener(`click`, () => {
      if (level.answers[index].artist !== level.correct) {
        playerData.mistakes++;
        playerData.answers.push({answer: false, time: 30});
        renderScreen(guessArtist(levels[playerData.level]));
        if (playerData.mistakes >= 3) {
          renderScreen(getResult(results.fail));
        }
      } else {
        if (level.answers[index].artist === level.correct && playerData.level < 4) {
          playerData.answers.push({answer: true, time: 30});
          renderScreen(guessArtist(levels[++playerData.level]));
        } else {
          playerData.answers.push({answer: true, time: 30});
          renderScreen(guessGenre(levels[++playerData.level]));
        }
      }
    });
  });
  return guessArtistElement;
};
export default guessArtist;
