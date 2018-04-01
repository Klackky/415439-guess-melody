const MAIN_SCREEN_CONTAINER = document.querySelector(`.main`);
/**
 * function responsible for removing existing screen
 *
 * @function removeExistingScreen
 */
const removeExistingScreen = () => {
  let existingScreen = MAIN_SCREEN_CONTAINER.querySelector(`.main`);
  if (existingScreen) {
    existingScreen.parentNode.removeChild(existingScreen);
  }
};
/**
 * function responsible for rendering a new screen
 *
 * @function renderScreen
 * @param {node} screen we`re appending to the DOM
 * @return {node} return new DOM element
 */
const renderScreen = (screen) => {
  removeExistingScreen();
  return MAIN_SCREEN_CONTAINER.appendChild(screen);
};
export default renderScreen;
