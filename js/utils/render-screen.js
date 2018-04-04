const mainScreenContainer = document.querySelector(`.app`);
/**
 * function responsible for removing existing screen
 *
 * @function removeExistingScreen
 */
const removeExistingScreen = () => {
  let existingScreen = mainScreenContainer.querySelector(`section.main`);
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
  return mainScreenContainer.appendChild(screen);
};
export default renderScreen;
