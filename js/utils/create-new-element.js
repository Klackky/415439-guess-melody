const createNewDomElement = (string) => document.createRange().createContextualFragment(string);

export default createNewDomElement;
