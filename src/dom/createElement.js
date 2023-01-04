const createElement = (obj) => {
  if (!('tagName' in obj)) {
    throw new Error('element should have a tagName');
  }

  const element = document.createElement(obj.tagName);

  if ('classList' in obj) {
    element.classList.add(...obj.classList);
  }

  if ('text' in obj) {
    element.textContent = obj.text;
  }

  if ('attributes' in obj) {
    for (const [key, value] of Object.entries(obj.attributes)) {
      element.setAttribute(key, value);
    }
  }

  if ('children' in obj) {
    const elements = createBulkElements(obj.children);
    elements.forEach((child) => {
      element.appendChild(child);
    });
  }

  return element;
};

export const createBulkElements = (arrayOfTree) => {
  const array = [];

  arrayOfTree.forEach((child) => {
    array.push(createElement(child));
  });

  return array;
};


export default createElement
