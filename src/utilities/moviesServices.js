import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "048606db50f52287d36a510eab6b20ca";
const BASE_URL_SEARCH = "https://api.themoviedb.org/3/search/movie";

export const getPopularMovies = (setterMovies, page, setterLoading) => {
  axios
    .get(`${BASE_URL}popular?api_key=${API_KEY}&page=${page}`)
    .then((res) => {
      if (res.status === 200) {
        setterMovies(res.data.results);
        setterLoading(false);
      }
    })
    .catch((error) => {});
};

export const getTopScore = (setterMovies, page, setterLoading, setterPages) => {
  axios
    .get(`${BASE_URL}top_rated?api_key=${API_KEY}&page=${page}`)
    .then((res) => {
      if (res.status === 200) {
        setterMovies(res.data.results);
        setterPages(res.data.total_pages);
        console.log(res.data);
        setterLoading(false);
      }
    })
    .catch((error) => {});
};

export const getImagesMovie = (setterImage, movieId, setterLoading) => {
  axios
    .get(`${BASE_URL}/${movieId}/images?api_key=${API_KEY}`)
    .then((res) => {
      if (res.status === 200) {
        setterImage(res.data.posters.file_path);
        setterLoading(false);
      }
    })
    .catch((error) => {});
};

export const getMovieDetails = (setterDetails, movieId, setterLoading) => {
  axios
    .get(`${BASE_URL}${movieId}?api_key=${API_KEY}`)
    .then((res) => {
      if (res.status === 200) {
        console.log("MovieDetails", res);
        setterDetails(res.data);
        setterLoading(false);
      }
    })
    .catch((error) => {});
};

export const getSimilarMovies = (
  setterSimilarMovies,
  movieId,
  setterLoading,
  page
) => {
  axios
    .get(`${BASE_URL}${movieId}/similar?api_key=${API_KEY}&page=${page}`)
    .then((res) => {
      if (res.status === 200) {
        setterSimilarMovies(res.data.results.slice(0, 10));
        setterLoading(false);
      }
    });
};

export const getMoviesSearch = (
  setterMovies,
  page,
  setterLoading,
  setterPages,
  searcher,
  adult,
  language
) => {
  axios
    .get(
      `${BASE_URL_SEARCH}?api_key=${API_KEY}&page=${page}&query=${searcher}&include_adult=${adult}&language=${language}`
    )
    .then((res) => {
      if (res.status === 200) {
        setterMovies(res.data.results);
        setterPages(res.data.total_pages);
        console.log(res.data);
        setterLoading(false);
      }
    })
    .catch((error) => {});
};
