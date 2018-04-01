/**
 * DOM from string
 *
 * @function createNewDomElement
 * @param {string} string we`re converting to a DOM element
 * @return {node} new DOM element
 */
const createNewDomElement = (string) => {
  const template = document.createElement(`template`);
  template.innerHTML = string.trim();
  return template.content.firstChild;
};
export default createNewDomElement;
