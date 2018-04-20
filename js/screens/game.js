export {createTimer} from '../utils/create-timer';
import {roundTime} from '../utils/tools';
import {playerData} from '../data/game-data.js';
export const header = (state) => `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
    <circle
      cx="390" cy="390" r="370"
      class="timer-line"
      style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

    <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
      <span class="timer-value-mins">${roundTime(state.time).minutes}</span><!--
      --><span class="timer-value-dots">:</span><!--
      --><span class="timer-value-secs">${roundTime(state.time).seconds}</span>
    </div>
  </svg>
  <div class="main-mistakes">
  ${new Array(playerData.mistakes)
      .fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`)
      .join(``)}
  </div>`;

export const playerTemplate = (question) => {
  return (
    `<div class="player-wrapper">
          <div class="player">
            <audio> <source src=${question}></audio>
            <button class="player-control player-control--pause"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
    </div>`);
};
