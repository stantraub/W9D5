class DOMNodeCollection {
  constructor(arr) {
    this.arr = arr;
  }

  html(str) {
    if (typeof str === "string") {
      this.each((node) => {
        node.innerHTML = str;
      });
    } else {
      return this.nodes[0].innerHTML;
    }
  }
}

empty(arr) {
  this.each((node) => {
    node.innerHTML = "";
  });
}



module.exports = DOMNodeCollection;

