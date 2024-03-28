import { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import reactLogo from "./assets/react.svg";

import "./App.css";
import TabButton from "./components/TabButton";
import TabView from "./components/TabView";
import GaleryComponent from "./components/GaleryComponent";
import LikeComponent from "./components/LikeComponent";
import Navbar from "./components/Navbar";
import { LikeProvider } from "./context/likeContext";

//TODO: LOADER ,INFO COMPONENT, NAVBAR STICKY, clear favorites, delete one photo

function App() {
  return (
    <LikeProvider>
      <BrowserRouter>
        <Navbar />
        <main className="container mx-auto mt-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16">
            Astronomy Picture of the Day
          </h1>
          <Routes>
            <Route path="/" element={<GaleryComponent />} />
            <Route path="/favorites" element={<LikeComponent />} />
          </Routes>
        </main>
      </BrowserRouter>
    </LikeProvider>
  );
}

export default App;
