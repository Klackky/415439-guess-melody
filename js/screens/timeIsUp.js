import AbstractView from '../abstract-view.js';
export default class TimeIsOver extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }
  get template() {
    return `<section class="main main--result">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        <h2 class="title">Увы и ах!</h2>
        <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
        <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
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
