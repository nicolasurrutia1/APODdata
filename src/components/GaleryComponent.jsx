import React, { useState, useMemo } from "react";
import CardComponent from "./CardComponent";
import InfoComponent from "./InfoComponent";
import { useDataContext } from "../context/dataContext";
import GalleryGrid from "./GalleryGrid";

const GaleryComponent = ({ likedPhotos, setLikedPhotos }) => {
  const [showInfo, setShowInfo] = useState(Array(3).fill(false));

  const { data, loading, error, reloadData } = useDataContext();
  const memoizedData = useMemo(() => data, [data]);

  const handleMoreInfo = (index) => {
    const newShowInfo = [...showInfo];
    newShowInfo[index] = !newShowInfo[index];
    setShowInfo(newShowInfo);
  };

  const handleLike = (index) => {
    const likedPhoto = memoizedData[index];
    setLikedPhotos((prevLikedPhotos) => [...prevLikedPhotos, likedPhoto]);    
  };

  const handleReloadData = () => {
    reloadData();
  };

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h2>Something went wrong! Please try again.</h2>
      </div>
    );
  }
  return (
    <section>
      <button
        onClick={handleReloadData}
        className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-3 mr-5 rounded w-28 mb-10"
      >
        Explore
      </button>
      <GalleryGrid />
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {memoizedData.map((data, index) => (
          <div key={index} className={`relative`}>
            <CardComponent
              data={data}
              index={index}
              showInfo={showInfo}
              handleMoreInfo={handleMoreInfo}
              handleLike={handleLike}
            ></CardComponent>
            <InfoComponent
              data={data}
              index={index}
              showInfo={showInfo}
              handleMoreInfo={handleMoreInfo}
            />
          </div>
        ))}
      </div> */}
    </section>
  );
};
export default GaleryComponent;
