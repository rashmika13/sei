console.log('JS is connected');

let titleEl = document.getElementById('title');

console.log(titleEl);

titleEl = document.querySelector('.main-title');

console.log(titleEl);

const pEl = document.querySelector('p.cool');

console.log(pEl);

pEl.innerHTML = 'Comments for <strong>Today</strong>';

pEl.style.textAlign = 'center';

titleEl.style.color = 'red';

const aEl = document.querySelector('a');
aEl.setAttribute('href', 'https://www.google.com');

const commentEls = document.querySelectorAll('.comment');

for (let commentEl of commentEls) {
  commentEls.style.fontSize = '30px';
}

let secondCommentEl = document.querySelector('#comments li.comment:nth-child(2)');
