import React, { useState, useEffect } from "react";
import CardComponent from "./CardComponent";
import InfoComponent from "./InfoComponent";

const baseURL = "https://api.nasa.gov/planetary/apod";
const apiKey = process.env.REACT_APP_API_KEY
const countData = "3";

const GaleryComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [showInfo, setShowInfo] = useState(Array(3).fill(false));
  const [reloadData, setReloadData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${baseURL}?api_key=${apiKey}&count=${countData}`
        );
        const newData = await response.json();
        setData(newData);
        // console.log(newData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    // fetchData();
    if (reloadData || data.length === 0) {
      fetchData();
      setReloadData(false);
    }
  }, [reloadData, data]);

  const handleMoreInfo = (index) => {
    const newShowInfo = [...showInfo];
    newShowInfo[index] = !newShowInfo[index];
    setShowInfo(newShowInfo);
  };

  const handleLike = (index) => {
    // Lógica para dar "me gusta" al elemento en el índice especificado
    console.log("Dar me gusta al elemento en el índice", index);
  };

  const handleReloadData = () => {
    setReloadData(true);
  };

  if (isLoading) {
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
        Discover
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {data.map((data, index) => (
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
      </div>
    </section>
  );
};
export default GaleryComponent;
