import HeaderView from './header.js';
import PlayerView from './player-view.js';
import {playerData} from '../data/game-data.js';
import AbstractView from '../abstract-view.js';
export default class ArtistView extends AbstractView {
  constructor(state) {
    super();
    this.question = state;
  }
  get template() {
    return `<section class="main main--level main--level-artist">
  ${new HeaderView(playerData).template}
      <div class="main-wrap">
        <h2 class="title main-title">Кто исполняет эту песню?</h2>
        ${new PlayerView(this.question.src).template}
        <form class="main-list">
        ${this.question.answers.map((answer, index) =>
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
  }

  onAnswer() {
  }

  bind(element) {
    const rightAnswer = this.question.correct;
    const answers = Array.from(element.querySelectorAll(`.main-answer-r`));
    answers.forEach((answer) => {
      answer.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this.onAnswer(rightAnswer === answer.value);
      });
    });

    const player = this.element.querySelector(`.player-control`);
    const audio = this.element.querySelector(`audio`);
    player.addEventListener(`click`, function (event) {
      if (event.target.classList.contains(`player-control--play`)) {
        event.target.classList.remove(`player-control--play`);
        event.target.classList.add(`player-control--pause`);
        audio.play();
      } else {
        audio.pause();
        event.target.classList.add(`player-control--play`);
        event.target.classList.remove(`player-control--pause`);
      }
    }, false);
  }
}
