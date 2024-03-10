const CardComponent = ({
  data,
  index,
  showInfo,
  handleMoreInfo,
  handleLike,
}) => {
  return (
    <div
      key={index}
      className={`bg-gray-200 p-4 rounded-lg flex flex-col h-auto relative ${
        showInfo[index] ? "" : "z-1"
      }`}
    >
      <img
        src={data.url}
        alt={data.title}
        loading="lazy"
        className="mb-3 object-cover w-full max-h-56"
      />
      <h2 className="text-lg font-bold mb-3">{data.title}</h2>
      <p className="text-sm text-gray-500 mb-10">{data.date}</p>
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
  );
};

export default CardComponent;
