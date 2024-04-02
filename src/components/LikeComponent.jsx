import Photo from "./Photo";
import { memo } from "react";
import { useLikeContext } from "../context/likeContext";
const LikeComponent = () => {
  const { likedPhotos, removeLikedPhoto, clearLikedPhotos } = useLikeContext();
  const uniqueLikedPhotos = likedPhotos.filter((photo, index) => {
    return likedPhotos.findIndex((p) => p.url === photo.url) === index;
  });

  const handleDelete = (photoUrl) => {
    removeLikedPhoto(photoUrl);
  };

  const handleClear = () => {
    clearLikedPhotos();
  };

  if (uniqueLikedPhotos.length === 0) {
    return (
      <div className="mt-10">
        <h3 className="text-xl">Save your pictures here</h3>
      </div>
    );
  }
  return (
    <section>
      <button
        onClick={handleClear}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-3 mr-5 rounded w-28 mb-10"
      >
        Clear
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {uniqueLikedPhotos.map((likedPhoto, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 rounded-lg flex flex-col h-auto relative"
          >
            <Photo
              src={likedPhoto.url}
              alt={likedPhoto.title}
              thumb={likedPhoto.thumbnail_url}
            />
            <h2 className="text-lg font-bold mb-3">{likedPhoto.title}</h2>
            <div className="mt-5 flex justify-end">
              <button
                onClick={() => handleDelete(likedPhoto.url)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded w-28"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(LikeComponent);
