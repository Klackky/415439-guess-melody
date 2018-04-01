const createNewDomElement = (string) => {
  const template = document.createElement(`template`);
  template.innerHTML = string.trim();
  return template.content.firstChild;
};
export default createNewDomElement;
