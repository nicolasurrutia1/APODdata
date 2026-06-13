import { memo } from "react";
import { useLikeStore } from "../stores/useLikeStore";
import CardComponent from "../components/CardComponent";

const FavoritesPage = () => {
  const { likedPhotos } = useLikeStore();
  const uniqueLikedPhotos = likedPhotos.filter((photo, index) => {
    return likedPhotos.findIndex((p) => p.url === photo.url) === index;
  });

  if (uniqueLikedPhotos.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {uniqueLikedPhotos.map((likedPhoto, index) => (
          <CardComponent
            key={likedPhoto.url}
            data={likedPhoto}
            index={index}
            mode="favorites"
          />
        ))}
      </div>
    </section>
  );
};

export default memo(FavoritesPage);
