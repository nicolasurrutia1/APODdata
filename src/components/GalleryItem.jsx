import { useDataContext } from "../context/dataContext";
import CardComponent from "./CardComponent";

const GalleryItem = ({ index }) => {
  const { data } = useDataContext();
  const item = data[index];
  return (
    <>
      <CardComponent
        data={item}
        index={index}      
      />
    </>
  );
};

export default GalleryItem
