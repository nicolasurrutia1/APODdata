import React, { useState, useEffect } from "react";

const GaleryComponent = () => {
  const [square, setSquare] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=jdPeHOSxoEVRlqk0ktYyRV3DEmwedzDA4caJmMta&count=3"
        );
        const data = await response.json();
        setSquare(data);
        console.log(data);
      } catch (error) {
        console.error("Error ", error);
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
      {square.map((square, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded-md flex flex-col">
          <img
            src={square.url}
            alt={square.title}
            className="mb-2 h-60 object-cover w-full"
            loading="lazy"
          />
          <h2 className="text-lg font-bold">{square.title}</h2>
          <p className="text-sm text-gray-500">{square.date}</p>
          <div className="mt-auto flex justify-end">
            <button
              onClick={() => handleMoreInfo(index)}
              className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
            >
              Más Info
            </button>

            <button
              onClick={() => handleLike(index)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Me Gusta
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default GaleryComponent;
