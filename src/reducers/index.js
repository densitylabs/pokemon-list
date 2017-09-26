const INITIAL_STATE = {
  searchTerm: '',
  searchType: '',
  isLoading: false,
  errorMessage: '',
  pokemons: []
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
};
