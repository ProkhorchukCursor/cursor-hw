export const handleStartFunc = (element) => {
 element.className = element.className === 'js-start' ? 'js-stop' : 'js-start';
 element.textContent =
  element.className === 'js-start' ? 'Зупинити' : 'Перевірити';
};

const createColor = () => Math.floor(Math.random() * 256);

const generateColors = () =>
 `rgb(${createColor()} ${createColor()} ${createColor()})`;

const generateStyles = (block) => {
 block.style.backgroundColor = generateColors();
 block.style.width = '50px';
 block.style.height = '50px';
};

const createBlocks = () => {
 const result = [];
 for (let i = 0; i < 25; i++) {
  const block = document.createElement('div');
  generateStyles(block);
  result.push(block);
 }
 return result;
};

export const generateBlocks = (element) => {
 while (element.firstChild) {
  element.removeChild(element.lastChild);
 }

 const blocks = createBlocks();
 blocks.map((block) => element.appendChild(block));
};
