const InfoComponent = ({ data, index, showInfo, handleMoreInfo }) => {
  return (
    <div
      className={`bg-gray-200 p-4 rounded-md flex flex-col absolute top-0 left-0 w-full h-max z-0 transition-opacity ${
        showInfo[index] ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <p>{data.explanation}</p>
      <div className="flex justify-end">
        <button
          onClick={() => handleMoreInfo(index)}
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 mt-5 rounded w-28"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default InfoComponent;
