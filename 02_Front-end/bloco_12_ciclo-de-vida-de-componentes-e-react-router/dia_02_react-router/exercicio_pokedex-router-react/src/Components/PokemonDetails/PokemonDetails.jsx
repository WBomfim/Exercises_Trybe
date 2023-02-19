import React, { Component } from "react";
import './PokemonDetails.css';

class PokemonDetails extends Component {
  render() {
    const {
      pokemons,
      favorites,
      onChangeFavorite,
      match: {
        params: { id },
      },
    } = this.props;
    const pokemonFound = pokemons.find((pok) => pok.id === Number(id));
    const isFavorite = favorites.some((fav) => fav.id === pokemonFound.id);

    return (
      <section className="details">
        <p>Nome: {pokemonFound.name}</p>
        <p>Tipo: {pokemonFound.type}</p>
        <p>
          Peso: {pokemonFound.averageWeight.value}
          {pokemonFound.averageWeight.measurementUnit}
        </p>
        <p>Sumário: {pokemonFound.summary}</p>
        <section className="maps">
          Mapas:
          {pokemonFound.foundAt.map((location) => (
            <section className="map" key={location.location}>
              <span>{location.location}</span>
              <img src={location.map} alt="mapa do pokemon" />
            </section>
          ))}
        </section>
        <label htmlFor="checkFavorite">
          <input
            id="checkFavorite"
            type="checkbox"
            checked={isFavorite}
            onChange={() => onChangeFavorite(pokemonFound, isFavorite)}
          />
          Pokemon Favoritado?
        </label>
      </section>
    );
  }
}

export default PokemonDetails;
