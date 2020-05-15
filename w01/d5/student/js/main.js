console.log('events yay');

const colors= ['red', 'blue', 'green']
const btnEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const ulEl = document.querySelector
const btnClickHandler = function(evt) {
    const liEl = document.createElement('li');
    const btnEl = document.createElement ('button');
    liEl.textContent =inputEl.value;
    ulEl.appendChild (liEl);
    inputEl.value='';
}

btnEl.addEventListener('click', btnClickHandler);
inputEl.addEventListener('focus', function() {
    console.log('focus')
})
ulEl.addEventListener('click', function(evt){
const color = colors[Math.floor(Math.random() * color.length)]
if (evt.target.tagName === 'LI')
    evt.target.style.color =color;
});


btnEl.addEventListener('mouseover', function(evt) {
    console.log('Mouse over button');
})

