import React, { Component } from "react";
import PropTypes from "prop-types";
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image} = pokemon;
    const { value, measurementUnit } = averageWeight;
    return (
      <div className="pokemon">
        <div>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>{ `Average Weight: ${value} ${measurementUnit}`}</p>
        </div>
        <img src={ image } alt={ name } />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
