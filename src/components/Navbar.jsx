import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-blue-900 p-4 fixed w-full top-0 left-0 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-white text-2xl font-bold">APOD</h2>
        </div>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-xl text-white hover:text-gray-300 transition duration-300"
          >
            Discover
          </Link>
          <Link
            to="/favorites"
            className="text-xl text-white hover:text-gray-300 transition duration-300"
          >
            Favorites
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
