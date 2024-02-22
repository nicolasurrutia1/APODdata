import React from "react";
const GaleryComponent = () => {
  const cuadrados = [
    { id: 1, contenido: "Contenido 1" },
    { id: 2, contenido: "Contenido 2" },
    { id: 3, contenido: "Contenido 3" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
      {cuadrados.map((cuadrado) => (
        <div key={cuadrado.id} className="bg-gray-200 p-4 rounded-md">
          {cuadrado.contenido}
        </div>
      ))}
    </div>
  );
};
export default GaleryComponent;
