import React from 'react';

const PokemonList = ({
  searchTerm,
  pokemons
}) => {
  const filteredPokemons = pokemons.filter(pokemon => {
    if (searchTerm) {
      return pokemon.ename.toLowerCase().includes(searchTerm.toLowerCase());
    }

    return true;
  });
  return (
    <ul>
      {
        filteredPokemons.map((pokemon, index) => (
          <li key={index}>{ pokemon.ename }</li>
        ))
      }
    </ul>
  )
};

export default PokemonList;
