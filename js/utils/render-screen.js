const MAIN_SCREEN_CONTAINER = document.querySelector(`.main`);
const removeExistingScreen = () => {
  let existingScreen = MAIN_SCREEN_CONTAINER.querySelector(`.main`);
  if (existingScreen) {
    existingScreen.parentNode.removeChild(existingScreen);
  }
};
const renderScreen = (screen) => {
  removeExistingScreen();
  return MAIN_SCREEN_CONTAINER.appendChild(screen);
};
export default renderScreen;
