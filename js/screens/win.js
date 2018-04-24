import {playerData} from '../data/game-data.js';
import {calcPoints} from '../utils/calc-points';
import {showResult} from '../utils/show-result';
import AbstractView from '../abstract-view.js';
const remainingNotes = 3 - playerData.mistakes;
export default class WinView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }
  get template() {
    return `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали ${calcPoints(playerData.answers, remainingNotes)} баллов
      <br>совершив ${playerData.mistakes} ошибки</div>
    <span class="main-comparison">${showResult([1, 5, 11, 7], playerData.answers)}</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;
  }
  onSubmit() {

  }
  bind() {
    const mainReply = this.element.querySelector(`.main-replay`);
    const submitHandler = (evt) => {
      evt.stopPropagation();
      evt.preventDefault();

      this.onSubmit();
    };
    mainReply.addEventListener(`click`, submitHandler);
  }
}
