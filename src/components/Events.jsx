import PropTypes from "prop-types";
import "../index.scss";

const Events = ({ setHover }) => {
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <span
      className="events font-pixel border-0  cursor-pointer  burger-menu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="bb border-2  hover:bg-black transition duration-300 hover:text-white border-black px-3  rounded-xl ">
        Events
      </h1>
    </span>
  );
};

Events.propTypes = {
  setHover: PropTypes.func.isRequired,
};

export default Events;
