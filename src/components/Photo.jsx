import PropTypes from "prop-types";

const Photo = ({ src, alt, thumb }) => {
    let source = src
    if(thumb !==undefined){
        source = thumb
    }
    return(
        <figure>
            <img src={source} alt={alt} className="mb-3 object-cover w-full h-full max-h-64"/>
        </figure>
    )
}
Photo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  thumb: PropTypes.string,
};

export default Photo;