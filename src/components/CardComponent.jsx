import Photo from "./Photo";
import { useLikeContext } from "../context/likeContext";
const CardComponent = ({
  data,
  index,
  showInfo,
  handleMoreInfo  
}) => {
  const { addLikedPhoto } = useLikeContext(); 
  const handleLike = () => {
    addLikedPhoto(data);
  };

  return (
    <div
      key={index}
      className={`bg-gray-200 p-4 rounded-lg flex flex-col h-auto ${
        showInfo[index] ? "" : "z-1"
      }`}
    >
      <Photo
        src={data.url}
        alt={data.title}
      />
      <h2 className="text-lg font-bold mb-3">{data.title}</h2>
      <p className="text-sm text-gray-500 mb-10">{data.date}</p>
      <div className="mt-auto flex justify-end">
        <button
          onClick={() => handleMoreInfo(index)}
          className="bg-blue-900 hover:bg-blue-950 text-white px-4 py-3 mr-5 rounded w-28"
        >
          Info
        </button>
        <button
          onClick={() => handleLike()}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded w-28"
        >
          Like
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
