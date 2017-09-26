import React from 'react';

const PokemonList = ({
  searchTerm,
  searchType,
  pokemons
}) => {
  const filteredPokemons = pokemons.slice();
  return (
    <ul>
      {
        filteredPokemons.map((pokemon, index) => (
          <li key={index}>{ pokemon }</li>
        ))
      }
    </ul>
  )
};

export default PokemonList;
