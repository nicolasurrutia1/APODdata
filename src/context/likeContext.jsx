import { useState } from "react";
import PropTypes from "prop-types";
import { LikeContext } from "./LikeContext";

export const LikeProvider = ({ children }) => {
  const [likedPhotos, setLikedPhotos] = useState([]);

  const addLikedPhoto = (photo) => {
    setLikedPhotos((prevLikedPhotos) => [...prevLikedPhotos, photo]);
  };

  const removeLikedPhoto = (photoUrl) => {
    setLikedPhotos((prevLikedPhotos) =>
      prevLikedPhotos.filter((photo) => photo.url !== photoUrl)
    );
  };

  const clearLikedPhotos = () => {
    setLikedPhotos([]);
  };

  return (
    <LikeContext.Provider
      value={{ likedPhotos, addLikedPhoto, removeLikedPhoto, clearLikedPhotos }}
    >
      {children}
    </LikeContext.Provider>
  );
};

LikeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
