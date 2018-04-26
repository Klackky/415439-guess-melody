export {createTimer} from '../utils/create-timer';
import {roundTime} from '../utils/tools';
import AbstractView from '../abstract-view.js';
export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }
  get template() {
    return `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle
          cx="390" cy="390" r="370"
          class="timer-line"
          style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

        <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
          <span class="timer-value-mins">${roundTime(this.state.time).minutes}</span><!--
          --><span class="timer-value-dots">:</span><!--
          --><span class="timer-value-secs">${roundTime(this.state.time).seconds}</span>
        </div>
      </svg>
      <div class="main-mistakes">
      ${new Array(this.state.mistakes)
      .fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`)
      .join(``)}
      </div>`;
  }
}
