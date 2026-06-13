import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import GalleryPage from "./pages/GalleryPage";
import FavoritesPage from "./pages/FavoritesPage";
import InfoPage from "./pages/InfoPage";
import Navbar from "./components/Navbar";
import PageHero from "./components/PageHero";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <div className="pt-16 flex flex-col flex-1">
          <PageHero />
          <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 text-left">
            <Routes>
              <Route path="/" element={<GalleryPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/info/:index" element={<InfoPage />} />
              <Route path="/favorites/info/:index" element={<InfoPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
