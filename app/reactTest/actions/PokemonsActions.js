import * as actionsTypes from 'app/reactTest/constants/AppConstants';
import axios from 'axios';

export const getPokemonList = (offset = 0) => (dispatch) => {
	dispatch({
		type: actionsTypes.START_LOADING,
	});

	dispatch({
		type: actionsTypes.CLEAR_POKEMON_LIST,
	});

	const apiUrl = `http://pokeapi.co/api/v2/pokemon?offset=${offset}`;

	return axios(apiUrl, {
		offset,
	}).then((response) => {
		if (response.data && response.data.results) {
			const {results} = response.data;
			const pokemonCount = results.length;

			results.map((pokemon, i) => {
    			axios(pokemon.url).then((pokemonData) => {
				dispatch({
        					type: actionsTypes.GET_POKEMON_DATA,
        					payload: pokemonData,
					offset,
        				});

				if (pokemonCount === i + 1) {
					dispatch({
            			type: actionsTypes.END_LOADING,
            		});
				}
    			});
    		});
		}
	}).catch((error) => {
		dispatch({
			type: actionsTypes.ERROR_LOADING,
		});
		console.log('error: ', error);
	});
};

export const filterPokemons = (keyword) => (dispatch) => {
	dispatch({
		type: actionsTypes.FILTER_POKEMONS,
		payload: keyword.toLowerCase(),
	});
};

export const addTypePokemon = (keyword) => (dispatch) => {
	dispatch({
		type: actionsTypes.ADD_TYPE_POKEMON,
		payload: keyword.toLowerCase(),
	});
};

export const removeTypePokemon = () => (dispatch) => {
	dispatch({
		type: actionsTypes.REMOVE_TYPE_POKEMON,
	});
};
