/**
function responsible for showing the final results.
 * @param {array} otherPlayersResults - array of others players results.
 * @param {object} playerResults - object with player`s results.
 * @return {string} final result.
 */
export const showResult = (otherPlayersResults, playerResults) => {
  const sortByPoints = otherPlayersResults.slice(0); // copy
  sortByPoints.push(playerResults); // push players results to an array of results;
  sortByPoints.sort(function (a, b) { // sort
    return a.points - b.points;
  });
  const playersPlace = (sortByPoints.reverse()).findIndex((element) => element.points === playerResults.points) + 1;
  const playersQuantity = sortByPoints.length;
  const percentage = (sortByPoints.length - playersPlace) / (playersQuantity - 1) * 100;
  if (playerResults.points === -1 && playerResults.remainingNotes === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }
  if (playerResults.points === -1 && playerResults.remainingTime === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  } else {
    return `Вы заняли ${playersPlace} место из ${playersQuantity} игроков. Это лучше, чем у ${percentage}% игроков,`;
  }
};
