const axios = require("axios");

module.exports = search;

// function search(req, res) {
//   let searchQuery = req.query.q;
//   let respomse = axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${searchQuery}`);
//   res.json(response.data)
// } catch err
