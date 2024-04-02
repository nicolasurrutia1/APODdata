import { createContext, useContext, useState } from "react";

const LikeContext = createContext();

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

export const useLikeContext = ()=>{
    return useContext(LikeContext)
}