let arrayOfElements = [];

arrayOfElements[0] = [...document.querySelector('#container').parentNode.children];

function addElementsToArray(element) {
  let temporaryArray = [],
      checker = false;
  for (let i = 0; i < element.length; i++) {
    for (let j = 0; j < element[i].children.length; j++) {
      temporaryArray.push(element[i].children[j]);
      if (element[i].children[j].children[0]) {
        checker = true;
      };
    };
  };
  arrayOfElements.push(temporaryArray);

  if (checker) {
    addElementsToArray(arrayOfElements[arrayOfElements.length - 1]);
  };
};

function setFontStyle(element, size, color){
  addElementsToArray(arrayOfElements[0]);
  for (let i = 0; i < element.length; i++) {
    for (let j = 0; j < element[i].length; j++) {
      element[i][j].setAttribute('style',`font-size: ${size}px; color: rgb(${color}); padding-left:${25}px`);
    };
    size -= 5;
    color[0] += 50;
  };
};

setFontStyle(arrayOfElements, 25, [50,50,50]);

// - 5 font
// + 50 color
