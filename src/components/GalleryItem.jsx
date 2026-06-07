import PropTypes from "prop-types";
import { useApodStore } from "../stores/useApodStore";
import CardComponent from "./CardComponent";

const GalleryItem = ({ index }) => {
  const { data } = useApodStore();
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
