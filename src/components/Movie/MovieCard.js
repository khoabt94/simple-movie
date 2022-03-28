import React from 'react';
import { IMAGE_URL } from '../../config';

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path } = item;
  return (
    <div className="flex flex-col h-full p-3 rounded-lg select-none movie-card bg-slate-800">
      <img
        src={`${IMAGE_URL}${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
      <div className="flex items-center justify-between mb-10 text-sm text-white opacity-50">
        <span>{release_date.slice(0, 4)}</span>
        <span>{vote_average}</span>
      </div>
      <button className="w-full px-6 py-3 mt-auto text-white capitalize rounded-lg bg-primary">
        Watch Now
      </button>
    </div>
  );
};

export default MovieCard;
