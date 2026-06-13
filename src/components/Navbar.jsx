import { NavLink } from "react-router-dom";
import { Telescope, Compass, Heart } from "lucide-react";
import { useLikeStore } from "../stores/useLikeStore";

const navLinkClass = ({ isActive }) =>
  `flex items-center gap-2 px-4 py-1.5 rounded-md text-[0.85rem] transition-all ${
    isActive
      ? "bg-card text-card-foreground shadow-sm"
      : "text-muted-foreground hover:text-card-foreground"
  }`;

const Navbar = () => {
  const { likedPhotos } = useLikeStore();

  return (
    <header className="bg-card/90 backdrop-blur-md border-b border-border p-4 fixed w-full top-0 left-0 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <div className="bg-primary rounded-lg p-1.5">
            <Telescope className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 className="text-card-foreground text-base font-semibold tracking-[0.08em]">
            APOD
          </h2>
        </div>
        <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
          <NavLink to="/" className={navLinkClass} end>
            <Compass className="w-4 h-4" />
            Discover
          </NavLink>
          <NavLink to="/favorites" className={navLinkClass} end>
            {({ isActive }) => (
              <>
                <Heart
                  className={`w-4 h-4 ${isActive ? "fill-current" : ""}`}
                />
                Favorites
                {likedPhotos.length > 0 && (
                  <span className="bg-primary text-primary-foreground rounded-full px-1.5 min-w-[20px] text-center text-[0.7rem]">
                    {likedPhotos.length}
                  </span>
                )}
              </>
            )}
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
