import {assert} from 'chai';
import {showResult} from '../utils/show-result';
const playerResultsFailExample = {
  points: -1, remainingNotes: 0, remainingTime: 0.40
};
const playerResultsNoTimeExample = {
  points: -1, remainingNotes: 1, remainingTime: 0
};
const playerResultsWinExample = {
  points: 11, remainingNotes: 0, remainingTime: 0.40
};
const playerResultsExample = {
  points: 7, remainingNotes: 0, remainingTime: 0.10
};

const otherPlayersResultsExpample = [
  {
    points: 10,
    remainingNotes: 3,
    remainingTime: 1.00,
  },
  {
    points: 8,
    remainingNotes: 3,
    remainingTime: 0.12,
  },
  {
    points: 5,
    remainingNotes: 2,
    remainingTime: 1.00,
  },
  {
    points: 3,
    remainingNotes: 1,
    remainingTime: 0.50,
  }
];
describe(`Check if result is correct`, () => {

  it(`should check if result is correct`, () => {
    assert.equal(showResult(otherPlayersResultsExpample, playerResultsFailExample), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
    assert.equal(showResult(otherPlayersResultsExpample, playerResultsWinExample), `Вы заняли 1 место из 5 игроков. Это лучше, чем у 100% игроков,`);
    assert.equal(showResult(otherPlayersResultsExpample, playerResultsExample), `Вы заняли 3 место из 5 игроков. Это лучше, чем у 50% игроков,`);
    assert.equal(showResult(otherPlayersResultsExpample, playerResultsNoTimeExample), `Время вышло! Вы не успели отгадать все мелодии`);
  });

});
