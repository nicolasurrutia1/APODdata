import PropTypes from "prop-types";
import { useDataContext } from "../context/data/useDataContext";
import CardComponent from "./CardComponent";

const GalleryItem = ({ index }) => {
  const { data } = useDataContext();
  const item = data && data[index];
  if (!item) {
    return null;
  }
  return (
    <>
      <CardComponent data={item} index={index} />
    </>
  );
};

GalleryItem.propTypes = {
  index: PropTypes.number.isRequired,
};

export default GalleryItem;
