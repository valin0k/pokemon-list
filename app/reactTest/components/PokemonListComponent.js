import React from 'react';
import PropTypes from 'prop-types';
import {lifecycle, compose, withHandlers} from 'recompose';
import Pagination from 'app/reactTest/components/PaginationComponent';

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
		componentWillMount() {
			const {getPokemonList} = this.props;
			getPokemonList();
		},
	}),
);


const CommentsComponent = enhance(
	(props) =>
		<div className="comments-container">
			<div className={props.isLoading ? 'ui active inverted dimmer' : 'ui inverted dimmer'}>
				<div className={props.isLoading ? 'ui active loader' : 'ui loader'} />
			</div>

			<div className="ui segment">
				<div className="ui input">
					<input onChange={props.handleChange} type="text" placeholder="Filter pokemons..." />
				</div>
			</div>

			<table className="ui celled table">
				<thead>
					<tr>
						<th>Avatar</th>
						<th className="clickable">
							Name
						</th>
						<th className="clickable">
							Types
						</th>
						<th>Abilities</th>
					</tr>
				</thead>
				<tbody>
					{props.pokemonList ?
						props.pokemonList.map((item, i) =>
							<tr key={item.name}>
								<td><img alt="pokemon" src={item.sprites.front_default} /></td>
								<td>{item.name}</td>
								<td>
									{item.types.map((itemType) => (
										<div
											key={itemType.type.name}
											className={props.filterLabel === itemType.type.name ?
												'ui green label pokemon-type active'
												:
												'ui green label pokemon-type'
											}
											onClick={() => props.filterLabel === itemType.type.name ?
												props.handleLabelRemove(itemType.type.name)
												:
												props.handleLabelSelect(itemType.type.name)
											}
										>
											{itemType.type.name}
										</div>
									))}
								</td>
								<td>
									{item.abilities.map((itemAbility) => (
										<div
											key={itemAbility.ability.name}
											className="ui grey label pokemon-ability"
										>
											{itemAbility.ability.name}
										</div>
									))}
								</td>
							</tr>
						)
						:
						<tr><td>Loading data...</td></tr>
					}
				</tbody>
			</table>

			<Pagination {...props} />
		</div>
);

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
