import React from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../config";
import Button from "../Button/Button";

const BannerItem = ({ item }) => {
  const { title, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full rounded-lg">
      <div className="absolute inset-0 rounded-lg overlay bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>
      <img src={`${API.image_sm}${poster_path}`} alt="" className="object-cover object-top w-full h-full rounded-lg " />
      <div className="absolute w-full text-white bottom-5 left-5">
        <h2 className="mb-3 text-3xl font-bold">{title}</h2>
        <div className="flex items-center mb-8 gap-x-3">
          <span className="px-4 py-2 border border-white rounded-md">Adventure</span>
          <span className="px-4 py-2 border border-white rounded-md">Action</span>
          <span className="px-4 py-2 border border-white rounded-md">Scientific</span>
        </div>
        <Button onClick={() => navigate(`/movies/${id}`)}>Watch Now</Button>
      </div>
    </div>
  );
};

export default BannerItem;
