import React from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../config";
import Button from "../Button/Button";
import LoadingSkeleton from "../Loading/LoadingSkeleton";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full p-3 rounded-lg select-none movie-card bg-slate-800">
      <img
        src={`${API.image_sm}${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5 object-top"
      />
      <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
      <div className="flex items-center justify-between mb-10 text-sm text-white opacity-50">
        <span>{release_date.slice(0, 4)}</span>
        <span>{vote_average}</span>
      </div>
      <Button onClick={() => navigate(`/movies/${id}`)}>Watch Now</Button>
    </div>
  );
};

export default MovieCard;

export const MovieCardSkeletion = () => {
  return (
    <div className="flex flex-col h-full p-3 rounded-lg select-none movie-card bg-slate-800">
      <LoadingSkeleton className="w-full h-[250px] object-cover rounded-lg mb-5 object-top"></LoadingSkeleton>
      <h3 className="mb-3 text-xl font-bold text-white">
        <LoadingSkeleton className="w-full h-[20px]"></LoadingSkeleton>
      </h3>
      <div className="flex items-center justify-between mb-10 text-sm text-white opacity-50">
        <span>
          {<LoadingSkeleton className="w-[50px] h-[10px]"></LoadingSkeleton>}
        </span>
        <span>
          {<LoadingSkeleton className="w-[30px] h-[10px]"></LoadingSkeleton>}
        </span>
      </div>
      {<LoadingSkeleton className="w-full h-[40px]"></LoadingSkeleton>}
    </div>
  );
};
