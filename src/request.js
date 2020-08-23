const API_KEY = "827711cf0a8d9035bdcbea71ef79ccf7";

export default {
    fetchTrending: `trending/all/week?api-key=${API_KEY}&language=en-US`,
    fetchNetlifOriginal: `discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaryMovies: `discover/movie?api_key=${API_KEY}&with_genres=99`,
}