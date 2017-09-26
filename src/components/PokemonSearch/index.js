import React from 'react';

const PokemonSearch = ({
  searchTerm,
  searchType
}) => (
  <div>
    <label htmlFor="searchTerm">
      Name <input name="searchTerm" value={searchTerm} />
    </label>
    <br />
    <label htmlFor="searchType">
      Type <input name="searchType" value={searchType} />
    </label>
  </div>
);

export default PokemonSearch;
