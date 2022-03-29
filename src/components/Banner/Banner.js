import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { API, fetcher } from "../../config";
import BannerItem from "./BannerItem";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const type = "upcoming";
  const url = `${API.url}${type}${API.key}`;
  const { data, error } = useSWR(url, fetcher);

  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);

  return (
    <section className="banner h-[800px] page-container overflow-hidden mb-20">
      <Swiper grabCursor={"true"} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <BannerItem item={movie}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Banner;
