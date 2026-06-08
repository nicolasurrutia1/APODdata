import PropTypes from "prop-types";

const LikeEffectComponent = ({ message, variant }) => {
  return (
    <div
      className={`fixed bottom-0 right-0 mb-5 mr-5 text-white p-3 rounded ${variant === "like" ? "bg-green-500" : "bg-red-500"}`}
    >
      {message}
    </div>
  );
};

LikeEffectComponent.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default LikeEffectComponent;
