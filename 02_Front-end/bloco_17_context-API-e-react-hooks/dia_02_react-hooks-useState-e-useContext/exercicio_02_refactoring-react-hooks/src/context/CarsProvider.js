import React, { useState } from "react";
import PropTypes from 'prop-types';
import CarsContext from "./CarsContext";

function CarsProvider({ children }) {
  const [Cars, setCars] = useState({
      red: false,
      blue: false,
      yellow: false,
  });

  const moveCar = (car, side) => {
    setCars({
      ...Cars,
      [car]: side
    });
  }

  const context = {
    Cars,
    moveCar
  }

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
}

CarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CarsProvider;
