import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import pokemons from "./data";
import Pokedex from "./Components/Pokedex/Pokedex.jsx";
import PokemonDetails from "./Components/PokemonDetails/PokemonDetails";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound";
import FavoritesPokemons from "./Components/FavoritesPokemons";
import "./App.css";

const LOCALSTORAGE_KEY = "favorites";

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemonsList: pokemons,
      pokemonsFavorites:
        JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [],
    };
  }

  handleChangeFavorite = (pokemon, isFavorited) => {

    if (isFavorited === false) {
      this.setState((prevState) => {
        const newFavorites = [...prevState.pokemonsFavorites, pokemon];
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newFavorites));
        return {
          pokemonsFavorites: newFavorites,
        };
      });
    } else {
      this.setState((prevState) => {
        const newFavorites = prevState.pokemonsFavorites.filter(
          (pok) => pok.id !== pokemon.id
        );
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newFavorites));
        return {
          pokemonsFavorites: newFavorites,
        };
      });
    }
  };

  render() {
    const { pokemonsList, pokemonsFavorites } = this.state;

    return (
      <div className="App">
        <h1> Pokedex </h1>

        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/favorites">Pokémons Favoritos</Link>
        </nav>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Pokedex pokemons={pokemonsList} favorites={pokemonsFavorites} />
            )}
          />
          <Route
            path="/pokemons/:id"
            render={(propsRouter) => (
              <PokemonDetails
                {...propsRouter}
                pokemons={pokemonsList}
                favorites={pokemonsFavorites}
                onChangeFavorite={this.handleChangeFavorite}
              />
            )}
          />
          <Route path="/about" component={About} />
          <Route
            path="/favorites"
            render={(props) => (
              <FavoritesPokemons {...props} favorites={pokemonsFavorites} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
