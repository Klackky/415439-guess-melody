import Welcome from './screens/welcome';
import renderScreen from './utils/render-screen';
import ArtistView from './screens/guess-artist';
import GuessGenreView from './screens/guess-genre';
import FailView from './screens/fail';
import WinView from './screens/win';
import {playerData} from './data/game-data.js';
import {levels} from './data/game-data.js';

export const renderWelcomeScreen = () => {
  const welcomeScreenView = new Welcome();
  renderScreen(welcomeScreenView.element);
  welcomeScreenView.onSubmit = () => {
    renderGuessArtistScreen(levels[playerData.level]);
  };
};

const renderGuessArtistScreen = (state) => {
  const guessArtistView = new ArtistView(state);
  renderScreen(guessArtistView.element);
  guessArtistView.onAnswer = () => {
    if (event.target.value !== state.correct) {
      playerData.mistakes++;
      playerData.answers.push({answer: false, time: 30});
      renderGuessArtistScreen(levels[playerData.level]);
      if (playerData.mistakes >= 3) {
        renderFailScreen();
      }
    } else {
      if (event.target.value === state.correct && playerData.level < 4) {
        playerData.answers.push({answer: true, time: 30});
        renderGuessArtistScreen(levels[++playerData.level]);
      } else {
        playerData.answers.push({answer: true, time: 30});
        renderGuessGenre(levels[++playerData.level]);
      }
    }
  };
  guessArtistView.onClick = () => {
    const button = guessArtistView.element.querySelector(`.player-control`);
    const player = guessArtistView.element.querySelector(`audio`);
    if (button.classList.contains(`player-control--play`)) {
      player.play();
      button.classList.remove(`player-control--play`);
      button.classList.add(`player-control--pause`);
    } else {
      player.pause();
      button.classList.add(`player-control--play`);
      button.classList.remove(`player-control--pause`);
    }
  };
};

const renderGuessGenre = (state) => {
  const guessGenreView = new GuessGenreView(state);
  renderScreen(guessGenreView.element);
  const genreElement = guessGenreView.element;
  guessGenreView.onAnswer = () => {
    const checkboxes = Array.from(genreElement.querySelectorAll(`input[type="checkbox"]`));
    let notCorrect = false;
    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked && !state.answers[index].isCorrect || !checkbox.checked && state.answers[index].isCorrect) {
        notCorrect = true;
      }
      checkbox.checked = false;
    });
    if (!notCorrect && playerData.level < 9) {
      renderGuessGenre(levels[++playerData.level]);
      playerData.answers.push({answer: true, time: 30});
    } else if (notCorrect) {
      playerData.mistakes++;
      playerData.answers.push({answer: false, time: 30});
      renderGuessGenre(levels[playerData.level]);
      if (playerData.mistakes >= 3) {
        renderFailScreen();
      }
    } else {
      playerData.answers.push({answer: true, time: 30});
      renderWinScreen();
    }
  };
  const players = Array.from(guessGenreView.element.querySelectorAll(`.player`));
  players.forEach((player) => {
    player.addEventListener(`click`, (evt) => {
      evt.preventDefault();
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
};

const renderFailScreen = () => {
  const failScreenView = new FailView();
  renderScreen(failScreenView.element);
  failScreenView.onSubmit = () => {
    playerData.level = 0;
    playerData.mistakes = 0;
    playerData.answers.length = 0;
    renderGuessArtistScreen(levels[playerData.level]);
  };
};
const renderWinScreen = () => {
  const winScreenView = new WinView();
  renderScreen(winScreenView.element);
  winScreenView.onSubmit = () => {
    playerData.level = 0;
    playerData.mistakes = 0;
    playerData.answers.length = 0;
    renderGuessArtistScreen(levels[playerData.level]);
  };
};
