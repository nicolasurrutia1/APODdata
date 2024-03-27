import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4 flex justify-between items-center">
      <div>
        <h1 className="text-white text-lg font-bold">APOD</h1>
      </div>
      <div className="flex space-x-4">
        <Link
          to="/"
          className="text-white hover:text-gray-300 transition duration-300"
        >
          Discover
        </Link>
        <Link
          to="/favorites"
          className="text-white hover:text-gray-300 transition duration-300"
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
