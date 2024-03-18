import Photo from "./Photo";
import { memo } from "react";
import { useLikeContext } from "../context/likeContext";
const LikeComponent = () => { 
  const {likedPhotos}=useLikeContext()
  const uniqueLikedPhotos = likedPhotos.filter((photo, index) => {
    return likedPhotos.findIndex((p) => p.url === photo.url) === index;
  });
  
  if(uniqueLikedPhotos.length === 0){
    return(
      <div className="mt-10">
        <h2>Save your pictures here</h2>
      </div>
    )
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {uniqueLikedPhotos.map((likedPhoto, index) => (
        <div
          key={index}
          className="bg-gray-200 p-4 rounded-lg flex flex-col h-auto relative"
        >
          <Photo
            src={likedPhoto.url}
            alt={likedPhoto.title}          
          />
          <h2 className="text-lg font-bold mb-3">{likedPhoto.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default memo(LikeComponent);
