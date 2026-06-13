import { NavLink } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { useApodStore } from "../stores/useApodStore";
import { useLikeStore } from "../stores/useLikeStore";

const InfoPage = () => {
  const indexNum = parseInt(useParams().index, 10);
  const location = useLocation();
  const isFavorites = location.pathname.startsWith("/favorites/info");

  const { data } = useApodStore();
  const { likedPhotos } = useLikeStore();

  let item;
  let backTo;

  if (isFavorites) {
    const uniqueLikedPhotos = likedPhotos.filter(
      (photo, i) => likedPhotos.findIndex((p) => p.url === photo.url) === i,
    );
    item = uniqueLikedPhotos[indexNum];
    backTo = "/favorites";
  } else {
    item = data?.[indexNum];
    backTo = "/";
  }

  if (!isFavorites && (!data || data.length === 0)) {
    return (
      <div className="p-5 text-center text-muted-foreground">Loading...</div>
    );
  }

  if (isFavorites && likedPhotos.length === 0) {
    return (
      <div className="p-5 text-center">
        <p className="text-xl font-semibold mb-4 text-card-foreground">
          No favorites saved.
        </p>
        <NavLink
          to="/favorites"
          className="text-primary hover:text-primary/80 underline"
        >
          Back to favorites
        </NavLink>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="p-5 text-center">
        <p className="text-xl font-semibold mb-4 text-card-foreground">
          Photo not found.
        </p>
        <NavLink
          to={backTo}
          className="text-primary hover:text-primary/80 underline"
        >
          {isFavorites ? "Back to favorites" : "Back to gallery"}
        </NavLink>
      </div>
    );
  }

  let source = item.url;
  const thumb = item.thumbnail_url;
  if (thumb !== undefined) {
    source = thumb;
  }

  return (
    <div className="flex text-left  p-3 flex-col md:flex-row">
      <div className="sm:w-full md:w-1/2 ">
        <img src={source} alt={item.title} className="h-full w-full " />
      </div>
      <div className="sm:w-full md:w-1/2 md:px-2 lg:px-5 ml-5 ">
        <h3 className="text-xl font-bold mb-5 text-card-foreground">
          {item.title}
        </h3>
        <p className="text-base text-muted-foreground mb-2">{item.date}</p>
        {item.copyright && (
          <p className="text-base text-muted-foreground mb-5">
            © {item.copyright}
          </p>
        )}
        <p className="text-base text-card-foreground leading-relaxed mb-10 w-4/5">
          {item.explanation}
        </p>
        <div className="flex justify-center">
          <NavLink
            to={backTo}
            className="bg-primary hover:bg-primary/80 text-primary-foreground px-4 py-3 rounded-lg w-28 text-center transition-colors"
          >
            Back
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
