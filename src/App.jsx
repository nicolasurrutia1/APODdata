import { BrowserRouter, Routes, Route } from "react-router-dom";
// import reactLogo from "./assets/react.svg";

import "./App.css";
import GalleryPage from "./pages/GalleryPage";
import FavoritesPage from "./pages/FavoritesPage";
import InfoPage from "./pages/InfoPage";
import Navbar from "./components/Navbar";

//TODO: hacer un boton copy que copie link de la imagen

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container mx-auto my-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
          Astronomy Picture of the Day
        </h1>
        <Routes>
          <Route path="/" element={<GalleryPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/info/:index" element={<InfoPage />} />
          <Route path="/favorites/info/:index" element={<InfoPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
