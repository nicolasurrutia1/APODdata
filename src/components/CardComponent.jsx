import PropTypes from "prop-types";
import Photo from "./Photo";
import { useLikeContext } from "../context/useLikeContext";
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
      className={`bg-gray-200 p-4 rounded-lg flex flex-col h-full max-h-[500px] justify-around`}
    >
      <Photo src={data.url} alt={data.title} thumb={data.thumbnail_url} />
      <h3 className="text-xl font-bold mb-2">{data.title}</h3>
      <p className="text-sm text-gray-500">{data.date}</p>      
      <div className="mt-10 flex justify-end">
        <NavLink
          to={`/info/${index}`}          
          className="bg-blue-900 hover:bg-blue-950 text-white px-4 py-3 mr-5 rounded w-28"
        >
          Info
        </NavLink>
        <button
          onClick={() => handleLike()}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded w-28"
        >
          Like
        </button>
      </div>
      {showEffect && <LikeEffectComponent />}
    </div>
  );
};

CardComponent.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    thumbnail_url: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CardComponent;
