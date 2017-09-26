import React from 'react';

const PokemonSearch = ({
  searchTerm,
  onSearchTermChange
}) => {
  const handleTermChange = (e) => {
    onSearchTermChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="searchTerm">
        Name <input name="searchTerm" value={searchTerm} onChange={handleTermChange} />
      </label>
      <br />
    </div>
  );
};

export default PokemonSearch;
