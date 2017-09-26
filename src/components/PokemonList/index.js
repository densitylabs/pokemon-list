import React from 'react';

const PokemonList = ({
  searchTerm,
  pokemons
}) => {
  const filteredPokemons = pokemons.filter(pokemon => {
    if (searchTerm) {
      return pokemon.name.includes(searchTerm);
    }

    return true;
  });
  return (
    <ul>
      {
        filteredPokemons.map((pokemon, index) => (
          <li key={index}>{ pokemon.name }</li>
        ))
      }
    </ul>
  )
};

export default PokemonList;
