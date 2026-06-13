import PropTypes from "prop-types";
import { Info, Heart } from "lucide-react";
import Photo from "./Photo";
import { useLikeStore } from "../stores/useLikeStore";
import { NavLink } from "react-router-dom";

const CardComponent = ({ data, index }) => {
  const { addLikedPhoto, likedPhotos, removeLikedPhoto } = useLikeStore();
  const isLiked = likedPhotos.some((p) => p.url === data.url);

  const handleToggleLike = () => {
    if (isLiked) {
      removeLikedPhoto(data.url);
    } else {
      addLikedPhoto(data);
    }
  };

  return (
    <div
      key={index}
      className="group relative flex flex-col bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-0.5 h-full"
    >
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-muted [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-105">
        <Photo
          src={data.url}
          alt={data.title}
          thumb={data.thumbnail_url}
          fill
        />
        {isLiked && (
          <div className="absolute top-3 right-3 bg-accent text-accent-foreground rounded-full p-1.5">
            <Heart className="w-3.5 h-3.5 fill-current" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
      <h3 className="text-card-foreground leading-snug line-clamp-2 mb-1 px-4 pt-4">
        {data.title}
      </h3>
      <p className="text-muted-foreground text-[0.75rem] px-4">{data.date}</p>
      {data.copyright && (
        <p className="text-muted-foreground text-[0.7rem] mt-0.5 px-4">
          © {data.copyright}
        </p>
      )}
      <div className="mt-auto flex gap-2 pt-3 px-4 pb-4 border-t border-border">
        <NavLink
          to={`/info/${index}`}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors text-[0.8rem]"
        >
          <Info className="w-3.5 h-3.5" />
          Info
        </NavLink>
        <button
          type="button"
          onClick={handleToggleLike}
          className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg transition-colors text-[0.8rem] ${
            isLiked
              ? "bg-accent text-accent-foreground hover:bg-accent/80"
              : "bg-primary text-primary-foreground hover:bg-primary/80"
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-current" : ""}`} />
          {isLiked ? "Saved" : "Like"}
        </button>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    thumbnail_url: PropTypes.string,
    copyright: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CardComponent;
