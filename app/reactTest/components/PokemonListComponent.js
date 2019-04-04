import React from 'react';
import PropTypes from 'prop-types';
import {lifecycle, compose, withHandlers} from 'recompose';
import Pagination from 'app/reactTest/components/PaginationComponent';
import PokemonListItem from './PokemonListItem'

const enhance = compose(
	withHandlers({
		handleChange: props => e => {
			props.filterPokemons(e.target.value);
		},
		handleLabelSelect: props => pokemonType => {
			props.addTypePokemon(pokemonType);
		},
		handleLabelRemove: props => pokemonType => {
			props.removeTypePokemon();
		},
	}),
	lifecycle({
		componentDidMount() {
			this.props.getPokemonList()
		},
	}),
);


const CommentsComponent = enhance((props) => {
	const {isLoading, pokemonList, handleChange} = props
		return (
      <div className="comments-container">
        <div className={isLoading ? 'ui active inverted dimmer' : 'ui inverted dimmer'}>
          <div className={isLoading ? 'ui active loader' : 'ui loader'} />
        </div>

        <div className="ui segment">
          <div className="ui input">
            <input onChange={handleChange} type="text" placeholder="Filter pokemons..." />
          </div>
        </div>

        <Pagination {...props} />

        <table className="ui celled table">
          <thead>
          <tr>
            <th>Avatar</th>
            <th className="clickable">Name</th>
            <th className="clickable">Types</th>
            <th>Abilities</th>
          </tr>
          </thead>
          <tbody>
          {pokemonList
						? pokemonList.map((item, i) => <PokemonListItem key={item.name} {...props} item={item} />)
            : <tr><td>Loading data...</td></tr>
          }
          </tbody>
        </table>

        <Pagination {...props} />
      </div>
		)
	}
)

CommentsComponent.displayName = 'CommentsComponent';

CommentsComponent.propTypes = {
	filterPokemons: PropTypes.func.isRequired,
	getPokemonList: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired,
	pokemonList: PropTypes.array,
	handleLabelSelect: PropTypes.func,
	handleLabelRemove: PropTypes.func,
};

export default CommentsComponent;
