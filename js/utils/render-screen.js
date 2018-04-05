const renderScreen = (screen) => {
  const mainScreenContainer = document.querySelector(`.app`);
  const mainScreen = mainScreenContainer.querySelector(`.main`);
  mainScreenContainer.replaceChild(screen, mainScreen);
};
export default renderScreen;
