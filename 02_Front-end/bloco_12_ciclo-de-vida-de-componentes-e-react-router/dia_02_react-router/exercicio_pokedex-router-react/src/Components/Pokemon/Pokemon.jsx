import React from "react";
import { Link } from "react-router-dom";
import "./Pokemon.css";

class Pokemon extends React.Component {
  render() {
    const { isFavorite, pokemon } = this.props;
    const { name, type, averageWeight, image, id } = pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight:{" "}
            {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <Link id="details" to={`/pokemons/${id}`}>Mais detalhes</Link>
        </div>
        <img src={image} alt={`${name} sprite`} />
        {isFavorite && (
          <span role="img" aria-label="star">
            ⭐
          </span>
        )}
      </div>
    );
  }
}

export default Pokemon;
