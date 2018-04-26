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
  guessArtistView.onAnswer = (isCorrect) => {
    playerData.answers.push({answer: isCorrect, time: 30});
    if (!isCorrect) {
      playerData.mistakes++;
    }
    if (playerData.mistakes >= 3) {
      return renderFailScreen();
    }
    if (playerData.level < 4) {
      return renderGuessArtistScreen(levels[++playerData.level]);
    }
    return renderGuessGenre(levels[++playerData.level]);
  };
};

const renderGuessGenre = (state) => {
  const guessGenreView = new GuessGenreView(state);
  renderScreen(guessGenreView.element);
  guessGenreView.onAnswer = (isCorrect) => {
    playerData.answers.push({answer: isCorrect, time: 30});
    if (!isCorrect) {
      playerData.mistakes++;
    }
    if (playerData.mistakes >= 3) {
      return renderFailScreen();
    }
    if (playerData.level < 9) {
      return renderGuessGenre(levels[++playerData.level]);
    }
    return renderWinScreen();
  };
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
