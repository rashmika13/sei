console.log('Events, Yay!!');

const colors = ['red', 'blue', 'yellow', 'green'];

const btnEl = document.getElementById('add-btn');
const inputEl = document.querySelector('input');
const ulEl = document.querySelector('ul');

var btnClickHandler = function (evt) {
  const liEl = document.createElement('li');
  const btnEl = document.createElement('button');
  btnEl.textContent = 'Delete';
  btnEl.classList.add('delete-btn');

  // btnEl.addEventListener('click', function () {
  //   liEl.remove();
  // });

  liEl.textContent = inputEl.value;
  liEl.appendChild(btnEl);
  ulEl.appendChild(liEl);
  inputEl.value = '';

  if (ulEl.childElementCount === 4) {
    removeHandler();
    // The reason this didn't work is because we defined another btnEl
    // inside of the scope of this btnClickHandler function
    // btnEl.removeEventListener('click', btnClickHandler);
  }
};

function removeHandler() {
  console.log(btnClickHandler);
  btnEl.removeEventListener('click', btnClickHandler);
}

btnEl.addEventListener('click', btnClickHandler);

ulEl.addEventListener('click', function (evt) {
  // console.log(this); <-- ul element
  const el = evt.target;
  if (el.tagName === 'LI') {
    const color = colors[Math.floor(Math.random() * colors.length)];
    el.style.color = color;
  } else if (el.classList.contains('delete-btn')) {
    if (ulEl.childElementCount === 4) {
      btnEl.addEventListener('click', btnClickHandler);
    }
    el.parentElement.remove();
  }
});

// inputEl.addEventListener('focus', function () {
//   console.log('focus');
// });

// btnEl.addEventListener('mouseover', function (evt) {
//   console.log(this);
//   console.log('Mouse over button');
// });

// window.addEventListener('resize', function () {
//   console.log('resize');
// });

// document.addEventListener('keydown', function (evt) {
//   console.log(evt);
// });

// btnEl.addEventListener('click', function(evt) {
//   console.log(evt)
// })
