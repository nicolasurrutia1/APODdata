const LikeComponent = ({ likedPhotos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {likedPhotos.map((likedPhoto, index) => (
        <div
          key={index}
          className="bg-gray-200 p-4 rounded-lg flex flex-col h-auto relative"
        >
          <img
            src={likedPhoto.url}
            alt={likedPhoto.title}
            loading="lazy"
            className="mb-3 object-cover w-full max-h-56"
          />
          <h2 className="text-lg font-bold mb-3">{likedPhoto.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default LikeComponent;
