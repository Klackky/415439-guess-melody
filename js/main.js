const TEMPLATE = document.querySelector(`#templates`);
const MAIN_SCREEN_CONTAINER = document.querySelector(`.main`);
const RIGHT_ARROW_KEYCODE = 39;
const LEFT_ARROW_KEYCODE = 37;
const ALL_SCREENS = [
  TEMPLATE.content.querySelector(`.main--welcome`),
  TEMPLATE.content.querySelector(`.main--level-artist`),
  TEMPLATE.content.querySelector(`.main--level-genre`),
  TEMPLATE.content.querySelectorAll(`.main--result`)[0],
  TEMPLATE.content.querySelectorAll(`.main--result`)[1],
  TEMPLATE.content.querySelectorAll(`.main--result`)[2]
];
let currentScreenIndex = 0;

/**
 * function responsible for rendering new screen
 * @param {number} index index of current screen
 * @return {node} new node element
*/
const renderScreen = (index) => {
  removeExistingScreen();
  const mainScreen = ALL_SCREENS[index].cloneNode(true);
  MAIN_SCREEN_CONTAINER.appendChild(mainScreen);
  return mainScreen;
};

/**
 * function responsible for removing existing screen
*/
const removeExistingScreen = () => {
  let existingScreen = MAIN_SCREEN_CONTAINER.querySelector(`.main`);
  if (existingScreen) {
    existingScreen.parentNode.removeChild(existingScreen);
  }
};
/**
 * function responsible for switching screens
 * @param {event} event keyboard event
*/
const onArrowAndAltPress = (event) => {
  if (event.keyCode === RIGHT_ARROW_KEYCODE && event.altKey) {
    currentScreenIndex = currentScreenIndex < ALL_SCREENS.length - 1 ? ++currentScreenIndex : 0;
  }
  if (event.keyCode === LEFT_ARROW_KEYCODE && event.altKey) {
    currentScreenIndex = currentScreenIndex !== 0 ? --currentScreenIndex : 0;
  }
  renderScreen(currentScreenIndex);
};

renderScreen(currentScreenIndex);
document.addEventListener(`keydown`, onArrowAndAltPress);
