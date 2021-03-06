import AbstractView from '../abstract-view.js';
export default class FailView extends AbstractView {
  get template() {
    return `<section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <h2 class="title">Какая жалость!</h2>
      <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
      <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
    </section>`;
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
