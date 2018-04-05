import createNewDomElement from '../utils/create-new-element';
import renderScreen from '../utils/render-screen';
import guessArtist from './guess-artist';
const failTemplate = `<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">Какая жалость!</h2>
  <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
  <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
</section>`;
const fail = createNewDomElement(failTemplate);
const mainReply = fail.querySelector(`.main-replay`);
mainReply.addEventListener(`click`, () => {
  renderScreen(guessArtist);
});
export default fail;
