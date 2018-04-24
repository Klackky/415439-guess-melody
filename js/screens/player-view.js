import AbstractView from '../abstract-view.js';

export default class PlayerView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }
  get template() {
    return `<div class="player-wrapper">
            <div class="player">
              <audio> <source src=${this.state}></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
      </div>`;
  }
  onClick() {

  }
  bind() {
    this.element.querySelector(`.player-control`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onClick();
    });
  }
}
