import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AplicationContext from './AplicationContext';

class ProviderContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: 'red'
      },
    }
  }

  moveCar = (car, side) => {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      }
    });
  }

  changeSignal = (payload) => {
    this.setState({
      signal: {
        ...this.state.signal,
        color: payload,
      }
    });
  }

  render() {
    const { children } = this.props;
    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }

    return (
      <AplicationContext.Provider value={context}>
        {children}
      </AplicationContext.Provider>
    );
  }
}

ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProviderContext;
