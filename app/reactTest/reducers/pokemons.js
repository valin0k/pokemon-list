import * as actionsTypes from 'app/reactTest/constants/AppConstants'
import {handleActions} from 'redux-actions'

const initialState = {
	pokemons: [],
	offset: 0,
	filterKeyword: '',
	isLoading: false,
	filterLabel: [],
  loadedOffsets: []
};

export default handleActions({
	[actionsTypes.GET_POKEMON_DATA]: (state, action) => ({
		...state,
		pokemons: state.pokemons.concat(action.payload.pokemons.map(pokemon => pokemon.data)),
		offset: action.payload.offset,
    loadedOffsets: state.loadedOffsets.concat(action.payload.offset)
	}),
	[actionsTypes.FILTER_POKEMONS]: (state, action) => ({
		...state,
		filterKeyword: action.payload.keyword,
	}),
  [actionsTypes.CHANGE_OFFSET]: (state, action) => ({
    ...state,
    offset: action.payload.offset,
  }),
	[actionsTypes.ADD_TYPE_POKEMON]: (state, action) => ({
		...state,
		filterLabel: [action.payload.type],
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
