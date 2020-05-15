const colors = ['red', 'blue', 'yellow', 'green'];

const addBtnEl = document.getElementById('add-btn');
const inputEl = document.querySelector('input');
const ulEl = document.querySelector('ul');

const btnClickHandler = function (evt) {
  const liEl = document.createElement('li');
  const btnEl = document.createElement('button');
  btnEl.textContent = 'Delete';
  btnEl.classList.add('delete-btn');
  liEl.textContent = inputEl.value;
  liEl.appendChild(btnEl);
  ulEl.appendChild(liEl);
  inputEl.value = '';

  if (ulEl.childElementCount === 4) {
    addBtnEl.removeEventListener('click', btnClickHandler);
  }
};

addBtnEl.addEventListener('click', btnClickHandler);

ulEl.addEventListener('click', function (evt) {
  const el = evt.target;
  if (el.tagName === 'LI') {
    const color = colors[Math.floor(Math.random() * colors.length)];
    el.style.color = color;
  } else if (el.classList.contains('delete-btn')) {
    if (ulEl.childElementCount === 4) {
      addBtnEl.addEventListener('click', btnClickHandler);
    }
    el.parentElement.remove();
  }
});

// stopPropagation example
document.getElementById('parent').addEventListener('click', function (evt) {
  console.log('Parent Clicked');
});

document.getElementById('child').addEventListener('click', function (evt) {
  evt.stopPropagation();
  console.log('Child Clicked');
});

// preventDefault
document.querySelector('a').addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('a clicked');
});

/** 
 * 
 * Example without removing the event listener

const colors = ['red', 'blue', 'yellow', 'green'];

const addBtnEl = document.getElementById('add-btn');
const inputEl = document.querySelector('input');
const ulEl = document.querySelector('ul');

const btnClickHandler = function (evt) {
  if (ulEl.childElementCount < 4) {
    const liEl = document.createElement('li');
    const btnEl = document.createElement('button');
    btnEl.textContent = 'Delete';
    btnEl.classList.add('delete-btn');
    liEl.textContent = inputEl.value;
    liEl.appendChild(btnEl);
    ulEl.appendChild(liEl);
    inputEl.value = '';
  }
};

addBtnEl.addEventListener('click', btnClickHandler);

ulEl.addEventListener('click', function (evt) {
  const el = evt.target;
  if (el.tagName === 'LI') {
    const color = colors[Math.floor(Math.random() * colors.length)];
    el.style.color = color;
  } else if (el.classList.contains('delete-btn')) {
    el.parentElement.remove();
  }
});

*/
