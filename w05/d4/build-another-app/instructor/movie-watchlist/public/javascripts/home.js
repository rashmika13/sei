// app state
let movies, myMoviesIds;

// cache elements
let moviesListEl = document.getElementById('movies-list');
let searchFormEl = document.getElementById('search-form');
let searchInputEl = document.querySelector('#search-form input');

// events listeners
searchFormEl.addEventListener('submit', handleSearch);
moviesListEl.addEventListener('click', handleAddMovie);

// functions

init();

async function handleSearch(evt) {
  evt.preventDefault();
  const query = searchInputEl.value.replace(/^\s*/, '');
  if (query) {
    const data = await fetch(`/api/search?q=${query}`).then((res) => res.json());
    console.log(data);
    movies = data.Search;
    render();
  }
}

async function handleAddMovie(evt) {
  if (evt.target.tagName === 'BUTTON') {
    const imdbID = evt.target.getAttribute('data-id');
    const movie = movies.find((m) => m.imdbID === imdbID);
    try {
      let myMovie = await fetch('/api/my-movies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: movie.Title,
          img: movie.Poster,
          imdbID: movie.imdbID,
        }),
      }).then((res) => res.json());
      myMoviesIds.push(myMovie.imdbID);
      render();
    } catch (err) {
      console.error(err);
    }
  }
}

function init() {
  movies = [];
  myMoviesIds = [];
  // TODO: get all of myMovies from server (could inject server-side) instead
  render();
}

function render() {
  let html = movies.reduce((html, movie) => {
    return (
      html +
      `
      <div class="card m-1" style="width: 18rem;">
        <img src="${movie.Poster}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${movie.Title}</h5>
          ${
            myMoviesIds.includes(movie.imdbID)
              ? ''
              : `<button data-id="${movie.imdbID}" class="btn btn-primary">Add to List</button>`
          }
        </div>
      </div>
    `
    );
  }, '');

  moviesListEl.innerHTML = html;
}
