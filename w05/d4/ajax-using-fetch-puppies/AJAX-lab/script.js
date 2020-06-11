/*-- constants --*/
const BASE_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=2f1028d";

/*-- app's state vars --*/
let currentView, movies;

/*-- cached elements --*/
const indexViewEl = document.getElementById("index-view");
const listContainerEl = document.querySelector("#index-view section");
const createViewEl = document.getElementById("create-view");
const inputEls = document.querySelectorAll("#create-view input");

document
  .getElementById("create-view-btn")
  .addEventListener("click", function () {
    // Update state, call render...
    currentView = "create";
    render();
  });

document
  .getElementById("index-view-btn")
  .addEventListener("click", function () {
    init();
  });

document
  .getElementById("add-puppy-btn")
  .addEventListener("click", handleAddPuppy);
/*-- functions --*/
init();

async function init() {
  currentView = "index";
  puppies = await fetch(BASE_URL).then((res) => res.json());
  render();
}
function render() {
  indexViewEl.style.display = currentView === "index" ? "block" : "none";
  createViewEl.style.display = currentView === "create" ? "block" : "none";
  if (currentView === "index") {
    let html = puppies.reduce(
      (html, pup) =>
        html + `<div>${pup.name} (${pup.breed}) - age ${pup.age}</div>`,
      ""
    );
    listContainerEl.innerHTML = html;
  } else if (currentView === "create") {
    // TODO
  }
}

async function handleAddPuppy() {
  // Ensure there's a name entered
  if (inputEls[0].value) {
    let newPup = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: inputEls[0].value,
        breed: inputEls[1].value,
        age: inputEls[2].value,
      }),
    }).then((res) => res.json());
    alert(`Pup added has an id of ${newPup._id}`);
    // Clear the inputs
    inputEls[0].value = inputEls[1].value = inputEls[2].value = "";
  }
}
