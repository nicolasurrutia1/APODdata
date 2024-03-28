import { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import reactLogo from "./assets/react.svg";

import "./App.css";
import GaleryComponent from "./components/GaleryComponent";
import LikeComponent from "./components/LikeComponent";
import InfoComponent from "./components/InfoComponent";
import Navbar from "./components/Navbar";
import { LikeProvider } from "./context/likeContext";

//TODO: NAVBAR STICKY, clear favorites, delete one photo

function App() {
  return (
    <LikeProvider>
      <BrowserRouter>
        <Navbar />
        <main className="container mx-auto my-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
            Astronomy Picture of the Day
          </h1>
          <Routes>
            <Route path="/" element={<GaleryComponent />} />
            <Route path="/favorites" element={<LikeComponent />} />
            <Route path="/info/:index" element={<InfoComponent />} />
          </Routes>
        </main>
      </BrowserRouter>
    </LikeProvider>
  );
}

export default App;
