import { useLocation } from "react-router-dom";
import { Star, Trash2, Compass } from "lucide-react";
import { useLikeStore } from "../stores/useLikeStore";
import { useApodStore } from "../stores/useApodStore";

const PageHero = () => {
  const location = useLocation();
  const { likedPhotos, clearLikedPhotos } = useLikeStore();
  const { reloadData, isRefetching } = useApodStore();

  if (location.pathname.includes("/info/")) {
    return null;
  }

  const isFavorites = location.pathname === "/favorites";
  const isDiscover = location.pathname === "/";
  const uniqueCount = likedPhotos.filter(
    (photo, index) =>
      likedPhotos.findIndex((p) => p.url === photo.url) === index,
  ).length;

  const title = isFavorites ? "Your Favorites" : "Explore the Universe";
  const description = isFavorites
    ? uniqueCount > 0
      ? `You have saved ${uniqueCount} cosmic image${uniqueCount !== 1 ? "s" : ""} to your collection.`
      : "Save images from Discover to build your personal collection."
    : "A curated collection of stunning NASA astronomy images, updated daily.";

  return (
    <div className="border-b border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Star className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground uppercase tracking-widest text-[0.7rem]">
            NASA · Astronomy Picture of the Day
          </span>
          <Star className="w-4 h-4 text-muted-foreground" />
        </div>
        <h1 className="text-foreground text-2xl md:text-3xl font-medium mb-3">
          {title}
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto text-[0.9rem]">
          {description}
        </p>
        {isDiscover && (
          <button
            type="button"
            onClick={reloadData}
            disabled={isRefetching}
            className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/80 transition-colors text-[0.8rem] ${
              isRefetching ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            {isRefetching ? "Refreshing..." : "Explore"}
          </button>
        )}
        {isFavorites && uniqueCount > 0 && (
          <button
            type="button"
            onClick={clearLikedPhotos}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/80 transition-colors text-[0.8rem]"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default PageHero;
