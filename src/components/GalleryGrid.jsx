import { useApodStore } from "../stores/useApodStore";
import GalleryItem from "./GalleryItem";

const GalleryGrid = () => {
  const { data } = useApodStore();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {(data ?? []).map((item, index) => (
        <GalleryItem key={index} index={index} />
      ))}
    </div>
  );
};

export default GalleryGrid;
