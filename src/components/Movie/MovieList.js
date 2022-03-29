import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { API, fetcher } from "../../config";
import MovieCard, { MovieCardSkeletion } from "./MovieCard";

const MovieList = ({ type, label }) => {
  const url = `${API.url}${type}${API.key}`;
  const { data, error } = useSWR(url, fetcher);
  const isLoading = !data && !error;
  if (!data) return null;
  const movies = data?.results || [];

  return (
    <section className="pb-20 mb-10 movies-layout page-container">
      <h2 className="mb-5 text-3xl font-bold text-white capitalize">{label}</h2>
      <div className="movie-list">
        {isLoading && (
          <>
            <Swiper
              grabCursor={"true"}
              spaceBetween={40}
              slidesPerView={"auto"}
            >
              <SwiperSlide>
                <MovieCardSkeletion></MovieCardSkeletion>
              </SwiperSlide>
              <SwiperSlide>
                <MovieCardSkeletion></MovieCardSkeletion>
              </SwiperSlide>
              <SwiperSlide>
                <MovieCardSkeletion></MovieCardSkeletion>
              </SwiperSlide>
              <SwiperSlide>
                <MovieCardSkeletion></MovieCardSkeletion>
              </SwiperSlide>
              <SwiperSlide>
                <MovieCardSkeletion></MovieCardSkeletion>
              </SwiperSlide>
              <SwiperSlide>
                <MovieCardSkeletion></MovieCardSkeletion>
              </SwiperSlide>
            </Swiper>
          </>
        )}
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
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
