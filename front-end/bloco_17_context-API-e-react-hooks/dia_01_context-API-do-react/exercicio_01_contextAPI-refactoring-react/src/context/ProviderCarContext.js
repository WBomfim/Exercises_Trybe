import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CarContext from './CarContext';

class ProviderCarContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: false,
      blue: false,
      yellow: false,
    }
  }

  moveCar = (colorCar, side) => {
    this.setState({
      ...this.state,
      [colorCar]: side,
    });
  };

  render() {
    const { children } = this.props;

    return (
      <CarContext.Provider value={{
        ...this.state,
        moveCar: this.moveCar,
      }}>
        {children}
      </CarContext.Provider>
    );
  }
};

ProviderCarContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderCarContext;
