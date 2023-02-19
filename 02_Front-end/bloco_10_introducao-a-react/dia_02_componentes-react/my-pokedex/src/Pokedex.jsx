import React, { Component } from "react";
import Pokemon from "./Pokemon";
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        { pokemons.map((pokemon) => <Pokemon key = { pokemon.name} pokemon = { pokemon }/>)}
      </div>
    )
  }
}

export default Pokedex;
