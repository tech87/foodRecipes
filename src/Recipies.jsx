import React from "react";
import PropTypes from "prop-types";

const Pet = (props) => {
  return (
    <div>
      <h1 className="text-orange-600">{props.name}</h1>
      <h2 className="text-orange-600">{props.animal}</h2>
      <h2 className="text-orange-600">{props.breed}</h2>
    </div>
  );
};

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
};
export default Pet;
