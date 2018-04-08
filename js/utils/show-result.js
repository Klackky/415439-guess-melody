export const showResult = (otherPlayersResults, playerResults) => {
  const sortByPoints = otherPlayersResults.slice(0); // copy
  sortByPoints.push(playerResults); // push players results to an array of results;
  sortByPoints.sort(function (a, b) {
    return a.points - b.points;
  });
  const playersPlace = (sortByPoints.reverse()).findIndex((element) => element.points === playerResults.points) + 1;
  const playersQuantity = sortByPoints.length;
  const percent = (sortByPoints.length - playersPlace) / (playersQuantity - 1) * 100;
  if (playerResults.points === -1 && playerResults.remainingNotes === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }
  if (playerResults.points === -1 && playerResults.remainingTime === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  } else {
    return `Вы заняли ${playersPlace} место из ${playersQuantity} игроков. Это лучше, чем у ${percent}% игроков,`;
  }
};
