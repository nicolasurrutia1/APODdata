import { useDataContext } from "../context/dataContext";
import CardComponent from "./CardComponent";
import InfoComponent from "./InfoComponent";

const GalleryItem = ({ index }) => {
  const { data, showInfo, handleMoreInfo } = useDataContext();
  const item = data[index];
  return (
    <div className="relative">
      <CardComponent
        data={item}
        index={index}
        showInfo={showInfo}
        handleMoreInfo={handleMoreInfo}
        // handleLike={handleLike}
      />
      <InfoComponent
        data={item}
        index={index}
        showInfo={showInfo}
        handleMoreInfo={handleMoreInfo}
      />
    </div>
  );
};

export default GalleryItem
