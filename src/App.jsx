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

function App() {
  // const [activeTab, setActiveTab] = useState("discover");

  // const handleTabChange = useCallback((tab) => {
  //   setActiveTab(tab);
  // }, []);

  // const renderTabButtons = () => {
  //   return tabButtons.map((tabButton) => (
  //     <TabButton
  //       key={tabButton.value}
  //       label={tabButton.label}
  //       value={tabButton.value}
  //       active={activeTab === tabButton.value}
  //       onClick={() => handleTabChange(tabButton.value)}
  //     />
  //   ));
  // };

  // const tabButtons = [
  //   { label: "Discover", value: "discover" },
  //   { label: "Favorites", value: "favorites" },
  // ];

  // const tabViews = {
  //   discover: <GaleryComponent />,
  //   favorites: <LikeComponent />,
  // };

  //TODO LOADER, WHEN PRESS LIKE EFFECT ,INFO COMPONENT, NAVBAR STICKY 

  return (
    <LikeProvider>
      <BrowserRouter>
        <Navbar />
        <main className="container mx-auto mt-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16">
            Astronomy Picture of the Day
          </h1>
          {/* <div className="flex mt-5">{renderTabButtons()}</div>
          <TabView activeTab={activeTab} views={tabViews} /> */}
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
