import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './Pokedex.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      filter: this.props.pokemons,
      type: 'All Types',
      allPokemons: false
    };
  }
  
  changePosition(event, pokemons) {
    const direction = event.target.innerText;

    if(direction === 'Next') {
      this.setState((prevState) => {
        if (this.state.position < pokemons.length - 1) {
          return { position: prevState.position + 1 };
        }
        return { position: 0 };
      });
    } else {
      this.setState((prevState) => {
        if (this.state.position > 0) {
          return { position: prevState.position - 1 };
        }
        return { position: pokemons.length -1 };
      });
    }
  }

  filter(event) {
    const { pokemons } = this.props;
    const textButton = event.target.innerText;

    if(textButton !== 'All Types') {
      const filteredPokemons = pokemons.filter(pokemon => pokemon.type === textButton);
      this.setState((prevState) => {
        return { position: prevState.position = 0,
          filter: prevState.filter = filteredPokemons };
      });
    } else {
      this.setState((prevState) => {
        return { position: prevState.position = 0,
          filter: prevState.filter = pokemons };
      });
    }
  }

  fiterTypes() {
    const { pokemons } = this.props;
    const types = pokemons.map(pokemon => pokemon.type);
    const filterTypes = [...new Set(types)];
    return filterTypes;
  }

  changeShowAll() {
    if (this.state.allPokemons) {
      this.setState((prevState) => {
        return { allPokemons: prevState.allPokemons = false };
      });
    } else {
      this.setState((prevState) => {
        return { allPokemons: prevState.allPokemons = true };
      });
    }
  }

  render() {
    const pokemonsFilter = this.state.filter;
    const pokemons = pokemonsFilter[this.state.position];
    const types = this.fiterTypes();
    
    return (
      <div>
        <div className="pokedex">
          <Pokemon pokemon={pokemons} />
        </div>
        <div>
          <div>
            <Button 
              className='button'
              onClick={(event) => this.filter(event)}
            >
              All Types
            </Button>
            {types.map((type) => <Button 
              className='button' 
              onClick={(event) => this.filter(event)}
              >
                {type}
              </Button>)}
          </div>
          <div>
          <Button
              className='button' 
              onClick={() => this.changeShowAll()} 
              disabled={pokemonsFilter.length < 2}
            >
              {this.state.allPokemons ? 'Hides All' : 'Show All'}
            </Button>
            <Button
              className='button' 
              onClick={(event) => this.changePosition(event, pokemonsFilter)} 
              disabled={pokemonsFilter.length < 2}
            >
              Previous
            </Button>
            <Button
              className='button' 
              onClick={(event) => this.changePosition(event, pokemonsFilter)} 
              disabled={pokemonsFilter.length < 2}
            >
              Next
            </Button>
          </div>
        </div>
        <div className="pokedex">
          {this.state.allPokemons && pokemonsFilter.length > 1 ? pokemonsFilter.map((pokemon) => <Pokemon pokemon={pokemon} />) : ''}
        </div>
      </div>
    );
  }
}

export default Pokedex;
