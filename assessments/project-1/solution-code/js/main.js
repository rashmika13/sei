/*----- app's state (variables) -----*/
let count;

/*----- cached element references -----*/
let displayEl = document.querySelector('h1');
let inputEl = document.querySelector('input');

/*----- functions -----*/

const increment = () => {
  count = count + parseInt(inputEl.value);
  // count += parseInt(inputEl.value);
  render();
};

const decrement = () => {
  count = count - parseInt(inputEl.value);
  // count -= parseInt(inputEl.value);
  render();
};

const initialize = () => {
  count = 0;
  inputEl.value = 1;
  render();
};

const render = () => {
  displayEl.textContent = count;
  displayEl.className = count < 0 ? 'red' : '';
};

initialize();

/*----- event listeners -----*/
document.querySelector('#plus-btn').addEventListener('click', increment);
document.querySelector('#minus-btn').addEventListener('click', decrement);
