// app state
let moviesDb, movieElementsDb;

// cache elements
const moviesListEl = document.getElementById("movies-list");
const searchFormEl = document.getElementById("search-form");
const searchInputEl = document.querySelector("#search-form input");
const bannerEl = document.querySelector(".banner");

// events listeners
searchFormEl.addEventListener("submit", handleSearch);
moviesListEl.addEventListener("click", handleAddMovie);

// functions
init();

async function handleSearch(evt) {
  evt.preventDefault();
  const query = searchInputEl.value.replace(/^\s*/, "");
  if (query) {
    const data = await fetch(`/api/search?q=${query}`).then((res) =>
      res.json()
    );
    console.log(data);
    moviesDb = data.reduce((db, movie) => {
      db[movie.imdbID] = movie;
      return db;
    }, {});
    movieElementsDb = {}; // this will remove movie elements currently in memory
    data.forEach((movie) => createMovieElement(movie));
    renderMovieList();
  }
}

async function handleAddMovie(evt) {
  const imdbID = evt.target.getAttribute("data-imdb-id");
  if (imdbID && evt.target.tagName === "BUTTON") {
    const movie = moviesDb[imdbID];
    try {
      let myMovie = await fetch("/api/my-movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movie),
      }).then((res) => res.json());
      moviesDb[imdbID].inMyMovies = true;
      renderMovieEl(moviesDb[imdbID]);
    } catch (err) {
      console.error(err);
    }
  }
}

function init() {
  moviesDb = {};
  movieElementsDb = {};
  renderMovieList();
}

function createMovieElement(movie) {
  let el = document.createElement("div");
  el.classList.add("card", "m-1");
  el.innerHTML = movieCardHTML(movie);
  movieElementsDb[movie.imdbID] = el;
}

// returns the inner HTML for a movie element
function movieCardHTML(movie) {
  return `${movie.title} <img src="${movie.img}" class="card-img-top" alt="${
    movie.title
  }">
    <div class="card-body">
      <h5 class="card-title">${movie.title}</h5>
      
      ${
        movie.inMyMovies
          ? "<p style=color:#c53357>Nominated !</p>"
          : `<button data-imdb-id="${movie.imdbID}" class="btn"style="background-color:#034e40; color:white">Nominate Me</button>`
      }

    </div>`;
}

function renderMovieEl(movie) {
  // each movie element (dom node) is stored in the movieElementsDb object
  if (movieElementsDb[movie.imdbID]) {
    movieElementsDb[movie.imdbID].innerHTML = movieCardHTML(movie);
  }
}

function renderMovieList(movie) {
  moviesListEl.innerHTML = "";
  // loops over the movie elements inside the movieElementsDb object and appends them to the now empty moviesListEl
  Object.values(movieElementsDb).forEach((movieElement) =>
    moviesListEl.append(movieElement)
  );
}

async function handleAddBanner(evt) {
  const imdbID = evt.target.getAttribute("data-imdb-id");
  var numClicks = 0;
  numClicks++;
  if (numClicks === 5) {
    const bannerEl = document.querySelector(".banner");
    bannerEl.style.display = "block";
  }
}
