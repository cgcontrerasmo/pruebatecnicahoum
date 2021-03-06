import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "048606db50f52287d36a510eab6b20ca";
const BASE_URL_SEARCH = "https://api.themoviedb.org/3/search/movie";
const BASE_URL_CONFIG = "https://api.themoviedb.org/3/configuration/";

export const getPopularMovies = (
  setterMovies,
  page,
  setterLoading,
  setterPages
) => {
  axios
    .get(`${BASE_URL}popular?api_key=${API_KEY}&page=${page}`)
    .then((res) => {
      if (res.status === 200) {
        setterMovies(res.data.results);
        setterPages(res.data.total_pages);
        setterLoading(false);
      }
    })
    .catch((error) => {});
};

export const getUpcoming = (setterMovies, page, setterLoading, setterPages) => {
  axios
    .get(`${BASE_URL}upcoming?api_key=${API_KEY}&page=${page}`)
    .then((res) => {
      if (res.status === 200) {
        setterMovies(res.data.results);
        setterPages(res.data.total_pages);
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
        setterDetails(res.data);
        setterLoading(false);
      }
    })
    .catch((error) => {});
};

export const getSimilarMovies = (setterSimilarMovies, movieId, page) => {
  axios
    .get(`${BASE_URL}${movieId}/similar?api_key=${API_KEY}&page=${page}`)
    .then((res) => {
      if (res.status === 200) {
        setterSimilarMovies(res.data.results.slice(0, 5));
      }
    });
};

export const getMoviesSearch = (
  setterMovies,
  page,
  setterLoading,
  setterPages,
  filters
) => {
  axios
    .get(
      `${BASE_URL_SEARCH}?api_key=${API_KEY}&page=${page}&query=${filters.searchWord}&language=${filters.language}&region=${filters.region}&include_adult=${filters.include_adult}`
    )
    .then((res) => {
      if (res.status === 200) {
        setterMovies(res.data.results);
        setterPages(res.data.total_pages);
        setterLoading(false);
      }
    })
    .catch((error) => {});
};

export const getLanguages = (setterLanguages) => {
  axios.get(`${BASE_URL_CONFIG}languages?api_key=${API_KEY}`).then((res) => {
    if (res.status === 200) {
      setterLanguages(res.data);
    }
  });
};

export const getCountries = (setterCountries) => {
  axios.get(`${BASE_URL_CONFIG}countries?api_key=${API_KEY}`).then((res) => {
    if (res.status === 200) {
      setterCountries(res.data);
    }
  });
};
