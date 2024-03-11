import { useState, useCallback } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import GaleryComponent from "./components/GaleryComponent";
import TabButton from "./components/TabButton";
import TabView from "./components/TabView";
import LikeComponent from "./components/LikeComponent";

function App() {
  const [activeTab, setActiveTab] = useState("discover");
  const [likedPhotos, setLikedPhotos] = useState([])

  const handleTabChange = (tab)=>{
    setActiveTab(tab)
  }

  const tabButtons = [
    {label: "Discover", value:"discover"},
    {label: "Favorites", value:"favorites"}
  ]

  const memoizedSetLikedPhotos = useCallback((photos) => {
    setLikedPhotos(photos);
  }, []);

  const tabViews = {
    discover: <GaleryComponent setLikedPhotos={memoizedSetLikedPhotos} likedPhotos={likedPhotos} />,
    favorites: <LikeComponent likedPhotos={likedPhotos}/>,

  }

  return (
    <>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16">
          Astronomy Picture of the Day
        </h1>
        <div className="flex">
          {tabButtons.map((tabButton)=>(
            <TabButton  
            key={tabButton.value}
            label={tabButton.label}
            active={activeTab===tabButton.value}
            onClick={()=>handleTabChange(tabButton.value)}
            />
          ))}
        </div>
        <TabView 
        activeTab={activeTab}
        views={tabViews}
        />
      </div>
    </>
  );
}

export default App;
