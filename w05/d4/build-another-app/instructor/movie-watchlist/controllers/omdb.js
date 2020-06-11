const axios = require('axios');

module.exports = {
  search,
};

// async example of proxying an API call that uses an API key
// this allows us to keep our API key secret on the server and not expose it to the browser
async function search(req, res) {
  let searchQuery = req.query.q;
  try {
    let response = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${searchQuery}`
    );
    res.json(response.data);
  } catch (err) {
    console.error(err);
    if (err.response) {
      return res.status(err.response.status).json(err.response.data);
    }
    return res.status(500).json({ message: 'Server Error' });
  }
}
