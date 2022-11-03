const API_KEY = "70ea89794cdc7ac79bbca4e8ab1aaed3";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&append_to_response=images&include_image_language=null,en`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;

// http://api.themoviedb.org/3/trending/all/week?api_key=70ea89794cdc7ac79bbca4e8ab1aaed3&language=en-US/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg
