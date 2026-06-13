import { memo } from "react";
import { Trash2 } from "lucide-react";
import { useLikeStore } from "../stores/useLikeStore";
import CardComponent from "../components/CardComponent";

const FavoritesPage = () => {
  const { likedPhotos, clearLikedPhotos } = useLikeStore();
  const uniqueLikedPhotos = likedPhotos.filter((photo, index) => {
    return likedPhotos.findIndex((p) => p.url === photo.url) === index;
  });

  const handleClear = () => {
    clearLikedPhotos();
  };

  if (uniqueLikedPhotos.length === 0) {
    return (
      <div className="mt-10">
        <h3 className="text-xl text-card-foreground">
          Save your pictures here
        </h3>
      </div>
    );
  }

  return (
    <section>
      <button
        type="button"
        onClick={handleClear}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/80 transition-colors text-[0.8rem] mb-10"
      >
        <Trash2 className="w-3.5 h-3.5" />
        Clear All
      </button>
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
