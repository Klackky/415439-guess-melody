import HeaderView from './header.js';
import AbstractView from '../abstract-view.js';
import PlayerView from './player-view.js';
import {playerData} from '../data/game-data.js';
export default class GuessGenreView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }
  get template() {
    return `<section class="main main--level main--level-genre">
  ${new HeaderView(playerData).template}
    <div class="main-wrap">
      <h2 class="title">Выберите ${this.state.genre} треки</h2>
      <form class="genre">
      ${this.state.answers.map((answer, index) =>`<div class="genre-answer">
      ${new PlayerView(answer.src).template}
        <input type="checkbox" name="answer" value="answer-${index}" id="a-${index}">
        <label class="genre-answer-check" for="a-${index}"></label>
      </div>`).join(``)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>`;
  }
  onAnswer() {

  }
  onClick() {

  }
  bind() {
    const genreAnswersSend = this.element.querySelector(`.genre-answer-send`);
    const submitHandler = (evt) => {
      evt.stopPropagation();
      evt.preventDefault();

      this.onAnswer();
    };
    genreAnswersSend.addEventListener(`click`, submitHandler);
    this.element.querySelector(`.player-control`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onClick();
    });
  }
}
