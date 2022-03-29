export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const API = {
  url: "https://api.themoviedb.org/3/movie/",
  key: "?api_key=57ac6482c54a491401725aa24f0d8546",
  image_sm: "https://image.tmdb.org/t/p/w500/",
  image_lg: "https://image.tmdb.org/t/p/original/",
  getInitUrl() {
    return `${this.url}popular${this.key}`;
  },
  getSearchUrl() {
    return `https://api.themoviedb.org/3/search/movie${this.key}&query=`;
  },
};
