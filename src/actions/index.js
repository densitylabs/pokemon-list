import axios from 'axios';

export const fetchPokemons = () => dispatch => {
  dispatch({
    type: 'FETCH_POKEMONS_INIT'
  });
  return axios.get('http://pokeapi.co/api/v2/pokemon')
    .then(response => {
      dispatch({
        type: 'FETCH_POKEMONS_SUCCESS',
        response
      })
    });
};
