import axios from 'axios';

const setBaseUrl = () =>
  (axios.defaults.baseURL = 'https://api.themoviedb.org/3/');

//api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

export const getTrendingMovies = async () => {
  setBaseUrl();
  axios.defaults.params = {
    api_key: 'e71ded1823113d4f732d6196f077fd1f',
  };
  return axios
    .get('trending/movie/day')
    .then(({ data }) => data.results)
    .catch(err => {
      throw err;
    });
};

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

export const getDetailsMovies = async movie_id => {
  setBaseUrl();
  axios.defaults.params = {
    api_key: 'e71ded1823113d4f732d6196f077fd1f',
  };
  return axios
    .get(`movie/${movie_id}`)
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
};
/// https://api.themoviedb.org/3/search/movie?api_key=e71ded1823113d4f732d6196f077fd1f&language=en-US&query=batman&page=1&include_adult=false
/// https://api.themoviedb.org/3/movie/&query=car&page=1?api_key=e71ded1823113d4f732d6196f077fd1f

export const getSearchMovies = async query => {
  setBaseUrl();
  axios.defaults.params = {
    api_key: 'e71ded1823113d4f732d6196f077fd1f',
    language: 'en-US',
    query,
    page: 1,
    include_adult: false,
  };
  return axios
    .get(`/search/movie`)
    .then(({ data }) => data.results)
    .catch(err => {
      throw err;
    });
};
//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

export const getCreditsMovies = async movie_id => {
  setBaseUrl();
  axios.defaults.params = {
    api_key: 'e71ded1823113d4f732d6196f077fd1f',
    language: 'en-US',
  };
  return axios
    .get(`movie/${movie_id}/credits`)
    .then(({ data }) => data.cast)
    .catch(err => {
      throw err;
    });
};

export const getReviewsMovies = async movie_id => {
  setBaseUrl();
  axios.defaults.params = {
    api_key: 'e71ded1823113d4f732d6196f077fd1f',
    language: 'en-US',
    page: 1,
  };
  return axios
    .get(`movie/${movie_id}/reviews`)
    .then(({ data }) => data.results)
    .catch(err => {
      throw err;
    });
};
