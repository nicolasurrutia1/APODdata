import React, { useState, useEffect } from "react";

const baseURL = "https://api.nasa.gov/planetary/apod";
const apiKey = "jdPeHOSxoEVRlqk0ktYyRV3DEmwedzDA4caJmMta";
const countData = "3";

const GaleryComponent = () => {
  const [square, setSquare] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();  

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${baseURL}?api_key=${apiKey}&count=${countData}`          
        );
        const data = await response.json();
        setSquare(data);
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
    // Lógica para mostrar más información del elemento en el índice especificado
    console.log("Mostrar más información para el índice", index);
  };

  const handleLike = (index) => {
    // Lógica para dar "me gusta" al elemento en el índice especificado
    console.log("Dar me gusta al elemento en el índice", index);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong! Please try again.</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {square.map((square, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded-lg flex flex-col h-auto">
          <img
            src={square.url}
            alt={square.title}
            className="mb-3 object-cover w-full max-h-56"
            loading="lazy"
          />
          <h2 className="text-lg font-bold mb-3">{square.title}</h2>
          <p className="text-sm text-gray-500 mb-10">{square.date}</p>
          <div className="mt-auto flex justify-end">
            <button
              onClick={() => handleMoreInfo(index)}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 mr-5 rounded w-28"
            >
              Info
            </button>
            <button
              onClick={() => handleLike(index)}
              className="bg-red-600 hover:bg-red-500 text-white px-4 py-3 rounded w-28"
            >
              Like
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default GaleryComponent;
