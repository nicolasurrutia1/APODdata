import Photo from "./Photo";
import { useLikeContext } from "../context/likeContext";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import LikeEffectComponent from "./LikeEffectComponent";

const CardComponent = ({ data, index }) => {
  const { addLikedPhoto } = useLikeContext();
  const [showEffect, setShowEffect] = useState(false);

  const handleLike = () => {
    addLikedPhoto(data);
    setShowEffect(true);
    setTimeout(() => {
      setShowEffect(false);
    }, 1500);
  };

  return (
    <div
      key={index}
      className={`bg-gray-200 p-4 rounded-lg flex flex-col h-auto`}
    >
      {/* thumbnail_url */}
      <Photo src={data.url} alt={data.title} />
      <h3 className="text-xl font-bold mb-3">{data.title}</h3>
      <p className="text-sm text-gray-500 mb-2">{data.date}</p>      
      <div className="mt-10 flex justify-end">
        <NavLink
          to={`/info/${index}`}          
          className="bg-blue-900 hover:bg-blue-950 text-white px-4 py-3 mr-5 rounded w-28"
        >
          Info
        </NavLink>
        <NavLink
          onClick={() => handleLike()}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded w-28"
        >
          Like
        </NavLink>
      </div>
      {showEffect && <LikeEffectComponent />}
    </div>
  );
};

export default CardComponent;
