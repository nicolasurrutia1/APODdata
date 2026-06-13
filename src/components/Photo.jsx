import PropTypes from "prop-types";

const Photo = ({ src, alt, thumb, fill = false }) => {
  let source = src;
  if (thumb !== undefined) {
    source = thumb;
  }

  return (
    <figure className={fill ? "absolute inset-0 m-0" : undefined}>
      <img
        src={source}
        alt={alt}
        className={
          fill
            ? "h-full w-full object-cover"
            : "mb-3 object-cover w-full h-full max-h-64"
        }
      />
    </figure>
  );
};

Photo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  thumb: PropTypes.string,
  fill: PropTypes.bool,
};

export default Photo;
