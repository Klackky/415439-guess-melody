import HeaderView from './header.js';
import AbstractView from '../abstract-view.js';
import PlayerView from './player-view.js';
import {playerData} from '../data/game-data.js';

export default class GuessGenreView extends AbstractView {
  constructor(state) {
    super();
    this.question = state;
  }
  get template() {
    return `<section class="main main--level main--level-genre">
  ${new HeaderView(playerData).template}
    <div class="main-wrap">
      <h2 class="title">Выберите ${this.question.genre} треки</h2>
      <form class="genre">
      ${this.question.answers.map((answer, index) =>`<div class="genre-answer">
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

  bind() {
    const genreAnswersSend = this.element.querySelector(`.genre-answer-send`);
    const checkboxes = Array.from(this.element.querySelectorAll(`input[type="checkbox"]`));
    const answers = this.question.answers;

    genreAnswersSend.disabled = true;
    genreAnswersSend.addEventListener(`click`, () => {
      let isCorrect = true;
      checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked !== answers[index].isCorrect) {
          isCorrect = false;
        }
      });
      this.onAnswer(isCorrect);
    });

    genreAnswersSend.disabled = true;
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener(`change`, () => {
        genreAnswersSend.disabled = !checkboxes.some((answer) => answer.checked);
      });
    });

    const players = Array.from(this.element.querySelectorAll(`.player`));
    players.forEach((player) => {
      player.addEventListener(`click`, (event) => {
        event.preventDefault();
        const button = player.querySelector(`.player-control`);
        const audio = player.querySelector(`audio`);
        if (button.classList.contains(`player-control--play`)) {
          audio.play();
          button.classList.remove(`player-control--play`);
          button.classList.add(`player-control--pause`);
        } else {
          audio.pause();
          button.classList.add(`player-control--play`);
          button.classList.remove(`player-control--pause`);
        }
      });
    });
  }
}
