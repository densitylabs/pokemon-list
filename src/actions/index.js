import axios from 'axios';

export const fetchPokemons = () => dispatch => {
  dispatch({
    type: 'FETCH_POKEMONS_INIT'
  });
  return axios.get('http://localhost:3001/api/v2/pokemon')
    .then(response => {
      dispatch({
        type: 'FETCH_POKEMONS_SUCCESS',
        response
      })
    });
};

export const updateSearchTerm = searchTerm => ({
  type: 'UPDATE_SEARCH_TERM',
  searchTerm
});
