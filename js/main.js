const nodes = document.querySelector(`#templates`).content.querySelectorAll(`.main`);
const mainScreenContainer = document.querySelector(`.main`);
const fragment = document.createDocumentFragment();
const rightArrowKeycode = 39;
const leftArrowKeycode = 37;
let currentScreen = 0;

// converting a Node List to an Array
const allScreens = [].slice.call(nodes);

/**
* function responsible for swapping the value of two variables from array.
 * @param {array} arr array we work with
 * @param {number} index1 index of the first element
 * @param {number} index2 index of the second element
 * @return {array} transformed array
 */
const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  return arr;
};

swap(allScreens, 1, 2);

/**
 * function responsible for rendering new screen
 * @param {number} index index of current screen
 * @return {node} new node element
*/
const renderScreen = (index) => {
  removePreviousScreen();
  const mainScreen = allScreens[index].cloneNode(true);
  fragment.appendChild(mainScreen);
  mainScreenContainer.appendChild(fragment);
  return mainScreen;
};

/**
 * function responsible for removing previous screen
*/
const removePreviousScreen = () => {
  let oldScreen = mainScreenContainer.querySelector(`.main`);
  if (oldScreen) {
    oldScreen.parentNode.removeChild(oldScreen);
  }
};

const onArrowPress = (event) => {
  if (event.keyCode === rightArrowKeycode && event.altKey) {
    currentScreen = currentScreen < allScreens.length - 1 ? ++currentScreen : 0;
    renderScreen(currentScreen);
  }
  if (event.keyCode === leftArrowKeycode && event.altKey) {
    currentScreen = currentScreen !== 0 ? --currentScreen : 0;
    renderScreen(currentScreen);
  }
};

renderScreen(currentScreen);
document.addEventListener(`keydown`, onArrowPress);
