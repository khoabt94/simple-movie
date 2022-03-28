import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';
import { API_URL, fetcher, API_KEY } from '../../config';
import MovieCard from './MovieCard';

const MovieList = ({ type, label }) => {
  const [movies, setMovies] = useState([]);
  const url = `${API_URL}${type}${API_KEY}`;
  const { data, error } = useSWR(url, fetcher);

  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);

  return (
    <section className="pb-20 mb-10 movies-layout page-container">
      <h2 className="mb-5 text-3xl font-bold text-white capitalize">{label}</h2>
      <div className="movie-list">
        <Swiper grabCursor={'true'} spaceBetween={40} slidesPerView={'auto'}>
          {movies.length > 0 &&
            movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard item={movie}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MovieList;
