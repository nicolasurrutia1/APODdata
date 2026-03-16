import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-blue-900 p-4 fixed w-full top-0 left-0 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-white text-2xl font-bold">APOD</h2>
        </div>
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-xl text-white hover:text-gray-300 transition duration-300 ${isActive ? "active" : ""}`
            }
            end
          >
            Discover
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `text-xl text-white hover:text-gray-300 transition duration-300 ${isActive ? "active" : ""}`
            }
            end
          >
            Favorites
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
