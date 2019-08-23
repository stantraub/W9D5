DOMNodeCollection = require("./DOMNodeCollection.js");

window.$l = (arg) => {  
  let selected = document.querySelectorAll(arg);
  let selectedArray = Array.from(selected);

  new DOMNodeCollection(selectedArray);

  if (arg instanceof HTMLElement) {
    return new DOMNodeCollection(arg);
  }
};
