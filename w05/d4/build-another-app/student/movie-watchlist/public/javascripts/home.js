const BASE_URL = "/api/search";
// app state

let movies;
// cached el

let moviesListEl = document.getElementById("movies-list");
let searchFormEl = document.getElementById("search-form");
let searchInputEl = document.querySelector("#search-form input");

// event listeners

init();
