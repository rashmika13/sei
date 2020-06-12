/*-- constants --*/
const BASE_URL = 'https://sei-puppies-api.herokuapp.com/api/puppies/';

/*-- app state  --*/
let currentView, puppies, errorMessage;

/*-- cached elements --*/
const indexViewEl = document.getElementById('index-view');
const createViewEl = document.getElementById('create-view');
const errorMsgEl = document.getElementById('error-msg');

const listContainerEl = document.querySelector('#index-view section');
const inputEls = document.querySelectorAll('#create-view input');

// console.log(inputEls);

document.getElementById('create-view-btn').addEventListener('click', function () {
  currentView = 'create';
  errorMessage = '';
  render();
});

document.getElementById('index-view-btn').addEventListener('click', init);
document.getElementById('add-puppy-btn').addEventListener('click', handleAddPuppy);

/*-- functions --*/
init();

async function handleAddPuppy() {
  // Ensure there's a name entered
  const data = {
    name: inputEls[0].value,
    breed: inputEls[1].value,
    age: inputEls[2].value,
  };
  // console.log(data);
  const jsonData = JSON.stringify(data);
  // console.log(jsonData);

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: jsonData,
  };

  if (true || inputEls[0].value) {
    try {
      let newPup = await fetch(BASE_URL, options).then(async (res) => {
        if (res.status === 400) {
          throw new Error('Validation Error');
        }
        // if (res.status !== 200 || res.status !== 201) {
        //   let body = await res.json();
        //   throw new Error(body);
        // }
        res.json();
      });
      alert(`Pup added has an id of ${newPup._id}`);
      errorMessage = '';
      inputEls[0].value = inputEls[1].value = inputEls[2].value = '';
    } catch (err) {
      console.log(err);
      errorMessage = 'Something bad happened. Try again';
      render();
    }
  }
}

async function init() {
  currentView = 'index';
  errorMessage = '';
  puppies = await fetch(BASE_URL).then((res) => res.json());
  render();
}

function render() {
  indexViewEl.style.display = currentView === 'index' ? 'block' : 'none';
  createViewEl.style.display = currentView === 'create' ? 'block' : 'none';
  if (currentView === 'index') {
    let html = puppies.reduce(
      (html, pup) => html + `<div>${pup.name} (${pup.breed}) - age ${pup.age}</div>`,
      ''
    );
    listContainerEl.innerHTML = html;
  } else if (currentView === 'create') {
    //
  }
  errorMsgEl.textContent = errorMessage;
}
