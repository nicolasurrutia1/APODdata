import { useState, useCallback } from "react";
// import reactLogo from "./assets/react.svg";

import "./App.css";
import GaleryComponent from "./components/GaleryComponent";
import TabButton from "./components/TabButton";
import TabView from "./components/TabView";
import LikeComponent from "./components/LikeComponent";
import { LikeProvider } from "./context/likeContext";

function App() {
  const [activeTab, setActiveTab] = useState("discover");  

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  const renderTabButtons = () => {
    return tabButtons.map((tabButton) => (
      <TabButton
        key={tabButton.value}
        label={tabButton.label}
        value={tabButton.value}
        active={activeTab === tabButton.value}
        onClick={() => handleTabChange(tabButton.value)}
      />
    ));
  };

  const tabButtons = [
    { label: "Discover", value: "discover" },
    { label: "Favorites", value: "favorites" },
  ];

  const tabViews = {
    discover: (
      <GaleryComponent />
    ),
    favorites: <LikeComponent />,
  };

  return (
    <LikeProvider>
      <main className="container mx-auto mt-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16">
          Astronomy Picture of the Day
        </h1>
        <div className="flex mt-5">{renderTabButtons()}</div>
        <TabView activeTab={activeTab} views={tabViews} />
      </main>
    </LikeProvider>
  );
}

export default App;
