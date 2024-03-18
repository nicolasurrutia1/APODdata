import { useDataContext } from "../context/dataContext";
import GalleryItem from "./GalleryItem";

const GalleryGrid = () => {
  const { data } = useDataContext();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <GalleryItem key={index} index={index} />
      ))}
    </div>
  );
};

export default GalleryGrid
