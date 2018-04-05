import createNewDomElement from '../utils/create-new-element';
import renderScreen from '../utils/render-screen';
import guessArtist from './guess-artist';
const timeIsOverTemplate = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;
const timeIsOver = createNewDomElement(timeIsOverTemplate);
const mainReply = timeIsOver.querySelector(`.main-replay`);
mainReply.addEventListener(`click`, () => {
  renderScreen(guessArtist);
});
export default timeIsOver;
