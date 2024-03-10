import React, { useState, useEffect } from "react";
import CardComponent from "./CardComponent";
import InfoComponent from "./InfoComponent";

const baseURL = "https://api.nasa.gov/planetary/apod";
const apiKey = "jdPeHOSxoEVRlqk0ktYyRV3DEmwedzDA4caJmMta";
const countData = "3";

const GaleryComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [showInfo, setShowInfo] = useState(Array(3).fill(false));

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${baseURL}?api_key=${apiKey}&count=${countData}`
        );
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  
  const handleMoreInfo = (index) => {
    const newShowInfo = [...showInfo];
    newShowInfo[index] = !newShowInfo[index];
    setShowInfo(newShowInfo);
  };

  const handleLike = (index) => {
    // Lógica para dar "me gusta" al elemento en el índice especificado
    console.log("Dar me gusta al elemento en el índice", index);
  };

  if (isLoading) {
    return <div><h2>Loading...</h2></div>;
  }
  if (error) {
    return <div><h2>Something went wrong! Please try again.</h2></div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {data.map((data, index) => (
        <div key={index} className={`relative`}>
          <CardComponent data={data} index={index} showInfo={showInfo} handleMoreInfo={handleMoreInfo} handleLike={handleLike}></CardComponent>
          <InfoComponent data={data} index={index} showInfo={showInfo} handleMoreInfo={handleMoreInfo}/>
        </div>
        // <div
        //   key={index}
        //   className={`bg-gray-200 p-4 rounded-lg flex flex-col h-auto mb-5 relative ${
        //     showInfo[index] ? "z-10" : ""
        //   }`}
        // >
        //   <img
        //     src={data.url}
        //     alt={data.title}
        //     className="mb-3 object-cover w-full max-h-56"
        //     loading="lazy"
        //   />
        //   <h2 className="text-lg font-bold mb-3">{square.title}</h2>
        //   <p className="text-sm text-gray-500 mb-10">{square.date}</p>
        //   <div className="mt-auto flex justify-end">
        //     <button
        //       onClick={() => handleMoreInfo(index)}
        //       className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 mr-5 rounded w-28"
        //     >
        //       Info
        //     </button>
        //     <button
        //       onClick={() => handleLike(index)}
        //       className="bg-red-600 hover:bg-red-500 text-white px-4 py-3 rounded w-28"
        //     >
        //       Like
        //     </button>
        //   </div>
        //   <div
        //     className={`bg-gray-200 p-4 rounded-md flex flex-col absolute top-0 left-0 w-full h-max z-0 transition-opacity ${
        //       showInfo[index] ? "opacity-100" : "opacity-0 pointer-events-none"
        //     }`}
        //   >
        //     <p>{square.explanation}</p>
        //     <div className="flex justify-end">
        //       <button
        //         onClick={() => handleMoreInfo(index)}
        //         className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 mt-5 rounded w-28"
        //       >
        //         Back
        //       </button>
        //     </div>
        //   </div>
        // </div>
      ))}
    </div>
  );
};
export default GaleryComponent;
