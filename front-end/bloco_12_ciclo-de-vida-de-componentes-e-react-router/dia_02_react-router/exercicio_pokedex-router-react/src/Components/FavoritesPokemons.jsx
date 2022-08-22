import React, { Component } from "react";
import Pokemon from "./Pokemon/Pokemon";

class FavoritesPokemons extends Component {
  render() {
    const { favorites } = this.props;

    return (
      <section>
        {favorites.length === 0 && "Nenhum pokémon encontrado"}
        {favorites.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} isFavorite />
        ))}
      </section>
    );
  }
}

export default FavoritesPokemons;
