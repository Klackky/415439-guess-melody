import createNewDomElement from '../utils/create-new-element';
import renderScreen from '../utils/render-screen';
import guessArtist from './guess-artist';
const MAIN_SCREEN_CONTAINER = document.querySelector(`.main`);
export const playButton = MAIN_SCREEN_CONTAINER.querySelector(`.main-play`);
const welcomeScreenTemplate = `<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>`;
const welcomeScreen = createNewDomElement(welcomeScreenTemplate);
welcomeScreen.querySelector(`.main-play`).addEventListener(`click`, () => {
  renderScreen(guessArtist);
});
export default welcomeScreen;
