export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const API_URL = 'https://api.themoviedb.org/3/movie/';

export const API_KEY = '?api_key=57ac6482c54a491401725aa24f0d8546';

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
