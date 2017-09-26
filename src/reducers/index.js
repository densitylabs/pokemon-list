const INITIAL_STATE = {
  searchTerm: '',
  isLoading: false,
  errorMessage: '',
  pokemons: []
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_POKEMONS_SUCCESS':
      return {
        ...state,
        pokemons: action.response.data.results
      }
    case 'UPDATE_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.searchTerm
      }
    default:
      return state;
  }
};
