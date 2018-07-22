import * as actionsTypes from 'app/reactTest/constants/AppConstants';
import {handleActions} from 'redux-actions';

const initialState = {
	pokemons: [],
	offset: 0,
	filterKeyword: '',
	isLoading: false,
	filterLabel: [],
	loadedPages: []
};

export default handleActions({
	// [actionsTypes.GET_POKEMON_LIST]: (state, action) => ({
	// 	...state,
	// 	isLoading: false,
	// 	pokemons: [],
	// }),
	[actionsTypes.GET_POKEMON_DATA]: (state, action) => ({
		...state,
		pokemons: state.pokemons.concat(action.payload.pokemons.map(pokemon => pokemon.data)),
		offset: action.payload.offset,
		loadedPages: state.loadedPages.concat(action.payload.offset / 20)
	}),
	// [actionsTypes.CLEAR_POKEMON_LIST]: (state) => ({
	// 	...state,
	// 	pokemons: [],
	// }),
	[actionsTypes.FILTER_POKEMONS]: (state, action) => ({
		...state,
		filterKeyword: action.payload,
	}),
	[actionsTypes.ADD_TYPE_POKEMON]: (state, action) => ({
		...state,
		filterLabel: [action.payload],
	}),
	[actionsTypes.REMOVE_TYPE_POKEMON]: (state) => ({
		...state,
		filterLabel: [],
	}),
	[actionsTypes.END_LOADING]: (state) => ({
		...state,
		isLoading: false,
	}),
	[actionsTypes.ERROR_LOADING]: (state) => ({
		...state,
		isLoading: false,
	}),
	[actionsTypes.START_LOADING]: (state) => ({
		...state,
		isLoading: true,
	}),
}, initialState)
