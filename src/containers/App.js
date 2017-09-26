import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PokemonSearch from '../components/PokemonSearch';
import PokemonList from '../components/PokemonList';
import * as TodoActions from '../actions';

class App extends Component {
  componentWillMount() {
    this.props.actions.fetchPokemons();
  }
  render(){
    const {
      searchTerm,
      pokemons
    } = this.props;
    return (
      <div>
        <PokemonSearch
          searchTerm={searchTerm}
          onSearchTermChange={this.props.actions.updateSearchTerm}
        />
        <PokemonList {...{pokemons, searchTerm}} />
      </div>
    );
  }
};

App.propTypes = {
  pokemons: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  pokemons: state.pokemons
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
